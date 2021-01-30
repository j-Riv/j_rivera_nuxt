<template>
  <v-toolbar-items>
    <v-btn v-if="this.$i18n.locale === 'en'" text to="/resume">
      {{ this.$t('nav.resume') }}
    </v-btn>
    <v-btn v-else text to="/es/resume">
      {{ this.$t('nav.resume') }}
    </v-btn>
    <v-btn text to="/blog">BLOG</v-btn>
  </v-toolbar-items>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
};
</script>
