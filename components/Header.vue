<template>
  <div>
    <v-app-bar app color="black" height="100">
      <nuxt-link to="/">
        <v-avatar class="mr-3" color="black" size="70">
          <v-img contain max-height="70%" src="/images/jriv.png"></v-img>
        </v-avatar>
      </nuxt-link>

      <v-spacer />

      <v-menu top :close-on-click="closeOnClick">
        <template #activator="{ on }">
          <v-toolbar-items>
            <v-btn text title="Language" v-on="on">
              <i class="mdi mdi-earth"></i>
            </v-btn>
          </v-toolbar-items>
        </template>
        <v-list v-if="!$route.path.includes('blog')">
          <v-list-item v-if="this.$i18n.locale === 'es'">
            <v-btn text :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
              <v-list-item-title>En</v-list-item-title>
            </v-btn>
          </v-list-item>
          <v-list-item v-else>
            <v-btn text :to="`/es` + $route.fullPath">
              <v-list-item-title>Es</v-list-item-title>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-items
        v-if="$nuxt.$route.path === '/' || $nuxt.$route.path === '/es/' || $nuxt.$route.path === '/es'"
        class="d-none d-md-flex"
      >
        <v-btn text @click="$vuetify.goTo('#about-me')">
          {{ this.$t('index.about') }}
        </v-btn>
        <!-- <v-btn text @click="$vuetify.goTo('#skills')">
            {{ this.$t('index.skills') }}
          </v-btn> -->
        <v-btn text @click="$vuetify.goTo('#contact')">
          {{ this.$t('index.contact') }}
        </v-btn>
        <NavBar />
      </v-toolbar-items>
      <v-toolbar-items v-else class="d-none d-md-flex">
        <v-btn v-if="this.$i18n.locale === 'en'" text to="/">
          {{ this.$t('nav.home') }}
        </v-btn>
        <v-btn v-else text to="/es/">
          {{ this.$t('nav.home') }}
        </v-btn>
        <NavBar />
      </v-toolbar-items>

      <v-app-bar-nav-icon class="d-md-none" @click.stop="setDrawer()" />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from './NavBar.vue';

export default Vue.extend({
  name: 'Header',
  components: {
    NavBar,
  },
  data() {
    return {
      closeOnClick: true,
    };
  },
  methods: {
    setDrawer() {
      this.$store.commit('SET_DRAWER', !this.$store.state.drawer);
    },
  },
});
</script>
