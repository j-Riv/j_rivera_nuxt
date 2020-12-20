require('dotenv').config()
const collect = require('collect.js')
import axios from 'axios'

export default async () => {
  let { data } = await axios.post(process.env.COCKPIT_POSTS_URL,
    JSON.stringify({
      filter: { published: true },
      sort: { _created: -1 },
      populate: 1
    }),
    {
      headers: { 'Content-Type': 'application/json' }
    })
  const collection = collect(data.entries)

  let tags = collection.map(post => post.tags)
    .flatten()
    .unique()
    .map(tag => {
      let payload = collection.filter(item => {
        return collect(item.tags).contains(tag)
      }).all()

      return {
        route: `blog/category/${tag}`,
        payload: payload
      }
    }).all()

  let posts = collection.map(post => {
    return {
      route: `blog/${post.title_slug}`,
      payload: post
    }
  }).all()

  let r = ['/', '/es', '/resume', '/es/resume']

  return r.concat(posts).concat(tags)
}