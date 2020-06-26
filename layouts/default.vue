<template>
  <v-app dark>
    <Header/>
    <v-content>
      <nuxt />
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  data () {
    return {
    }
  }
}
</script>
