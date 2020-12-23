require('dotenv').config()
const collect = require('collect.js')
import axios from 'axios'
import Posts from '~/types/posts'

export default async () => {
  let { data }: Posts = await axios.post(process.env.COCKPIT_POSTS_URL,
    JSON.stringify({
      filter: { published: true },
      sort: { _created: -1 },
      populate: 1
    }),
    {
      headers: { 'Content-Type': 'application/json' }
    })
  const collection = collect(data.entries)

  let tags = collection.map((post: { tags: string[] }) => post.tags)
    .flatten()
    .unique()
    .map((tag: string) => {
      let payload = collection.filter((item: { tags: string[] }) => {
        return collect(item.tags).contains(tag)
      }).all()

      return {
        route: `blog/category/${tag}`,
        payload: payload
      }
    }).all()

  let posts = collection.map((post: { title_slug: string }) => {
    return {
      route: `blog/${post.title_slug}`,
      payload: post
    }
  }).all()

  let r = ['/', '/es', '/resume', '/es/resume']

  return r.concat(posts).concat(tags)
}