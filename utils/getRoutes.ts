import axios from 'axios';
import Posts from '~/types/posts';
require('dotenv').config();
const collect = require('collect.js');

export default async () => {
  const { data }: Posts = await axios.post(
    process.env.COCKPIT_POSTS_URL,
    JSON.stringify({
      filter: { published: true },
      sort: { _created: -1 },
      populate: 1,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const collection = collect(data.entries);

  const tags = collection
    .map((post: { tags: string[] }) => post.tags)
    .flatten()
    .unique()
    .map((tag: string) => {
      const payload = collection
        .filter((item: { tags: string[] }) => {
          return collect(item.tags).contains(tag);
        })
        .all();

      return {
        route: `blog/category/${tag}`,
        payload,
      };
    })
    .all();

  const posts = collection
    .map((post: { title_slug: string }) => {
      return {
        route: `blog/${post.title_slug}`,
        payload: post,
      };
    })
    .all();

  const r = ['/', '/es', '/resume', '/es/resume'];

  return r.concat(posts).concat(tags);
};
