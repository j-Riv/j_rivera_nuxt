<template>
  <v-list dense>

    <v-list-item @click="$vuetify.goTo('#about-me')">
      <v-list-item-icon>
        <v-icon> </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ this.$t('index.about') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item @click="$vuetify.goTo('#skills')">
      <v-list-item-icon>
        <v-icon> </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ this.$t('index.skills') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item @click="$vuetify.goTo('#contact')">
      <v-list-item-icon>
        <v-icon> </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ this.$t('index.contact') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </v-list>
</template>

<script>
  export default {
    name: 'DrawerSubNav'
  }
</script>