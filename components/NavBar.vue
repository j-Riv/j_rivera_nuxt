<template>
  <v-toolbar-items>
    <v-btn v-if="$i18n.locale === 'en'" text to="/resume">
      {{ $t('nav.resume') }}
    </v-btn>
    <v-btn v-else text to="/es/resume">
      {{ $t('nav.resume') }}
    </v-btn>
    <v-btn text to="/blog">BLOG</v-btn>
  </v-toolbar-items>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
};
</script>
