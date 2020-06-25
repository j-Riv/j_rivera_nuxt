<template>
  <div>
    <Hero/>
    <About/>
    <Features/>
    <Skills/>
    <Blog/>
    <Contact/>
  </div>
</template>

<script>
  // components
  import Hero from '~/components/Hero'
  import About from '~/components/About'
  import Features from '~/components/Features'
  import Skills from '~/components/Skills'
  import Blog from '~/components/Blog'
  import Contact from '~/components/Contact'

  export default {
    name: 'Index',
    // data () {}
  }
</script>