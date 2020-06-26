<template>
  <v-app dark>
    <Drawer/>
    <Header/>
    <v-content>
      <nuxt />
    </v-content>
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
