<template>
  <v-app dark>
    <Drawer/>
    <Header/>
    <v-main>
      <nuxt />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Drawer from '~/components/Drawer'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Drawer,
    Header,
    Footer
  }
}
</script>

<style lang="scss">
code {
  box-shadow: 0 !important;
  &::before {
    content: '' !important;
  }
}
</style>
