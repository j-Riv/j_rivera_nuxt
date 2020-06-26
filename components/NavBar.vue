<template>
  <v-toolbar-items>
    <v-btn text to="/resume" v-if="$t.locale === 'en'">
      {{ this.$t('nav.resume') }}
    </v-btn>
    <v-btn text to="/es/resume" v-else>
      {{ this.$t('nav.resume') }}
    </v-btn>
    <v-btn text to="/blog">
      BLOG
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>