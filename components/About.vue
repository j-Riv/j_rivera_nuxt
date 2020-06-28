<template>
  <section id="about-me">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">{{ this.$t('about.title') }}</h2>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1" color="white"></v-divider>

        <v-divider color="white"></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
      {{ this.$t('about.content') }}
      </v-responsive>

      <v-avatar
        class="elevation-12 mb-12"
        size="128"
      >
        <v-img src="/j-riv.jpg"></v-img>
      </v-avatar>

      <div></div>

      <!-- <v-btn
        color="grey"
        href="https://vuetifyjs.com"
        outlined
        large
      >
        <span class="grey--text text--darken-1 font-weight-bold">
          Vuetify Documentation
        </span>
      </v-btn> -->
      <SocialNav :center="true"/>

    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
import SocialNav from './SocialNav'

export default {
  name: 'About',
  components: {
    SocialNav
  }
}
</script>