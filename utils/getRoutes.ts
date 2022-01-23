import axios from 'axios';
import collect from 'collect.js';
import Posts from '~/types/posts';
require('dotenv').config();

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
    .map(tag => {
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
        route: `blog/post/${post.title_slug}`,
        payload: post,
      };
    })
    .all();

  const lang = ['/', '/es', '/resume', '/es/resume'];

  return [...lang, ...posts, ...tags, '/blog/category'];
};
