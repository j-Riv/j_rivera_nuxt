<template>
  <v-list dense>
    <v-list-item
      @click="
        $vuetify.goTo('#about-me');
        closeDrawer();
      "
    >
      <v-list-item-icon>
        <v-icon class="mdi mdi-account-box-outline" />
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ this.$t('index.about') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <!-- <v-list-item @click="$vuetify.goTo('#skills'); closeDrawer()">
      <v-list-item-icon>
        <v-icon class="mdi mdi-laptop"/>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ this.$t('index.skills') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item> -->

    <v-list-item
      @click="
        $vuetify.goTo('#contact');
        closeDrawer();
      "
    >
      <v-list-item-icon>
        <v-icon class="mdi mdi-email-outline" />
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ this.$t('index.contact') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DrawerSubNav',
  methods: {
    closeDrawer() {
      this.$store.commit('SET_DRAWER', !this.$store.state.drawer);
    },
  },
});
</script>
