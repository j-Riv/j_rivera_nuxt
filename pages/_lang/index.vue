<template>
  <div>
    <Hero/>
    <About/>
    <Features/>
    <Skills/>
    <Blog :articles="posts"/>
    <Contact/>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import About from '~/components/About'
import Features from '~/components/Features'
import Skills from '~/components/Skills'
import Blog from '~/components/Blog'
import Contact from '~/components/Contact'

export default {
  name: 'Index',
  data () {
    return {
      posts: []
    }
  },
  head() {
    return {
      title: 'José Alfredo Rivera Turcios',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('about.content') + '..'
        }
      ]
    }
  },
  async asyncData ({ $axios }) {
    const { data } = await $axios.post(process.env.COCKPIT_POSTS_URL,
    JSON.stringify({
        filter: { published: true },
        limit: 3,
        sort: {_created: -1},
        populate: 1
      }),
    {
      headers: { 'Content-Type': 'application/json' }
    })

    return { posts: data.entries }
  }
}
</script>