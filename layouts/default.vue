<template>
  <v-app dark>
    <Drawer />
    <Header />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Drawer from '~/components/Drawer.vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Drawer,
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
code {
  box-shadow: 0 !important;
  &::before {
    content: '' !important;
  }
}
</style>
