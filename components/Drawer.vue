<template>
  <v-navigation-drawer v-model="drawer" fixed temporary>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="/images/iam-jriv.jpeg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <!-- <v-list-item-title>j-Riv</v-list-item-title> -->
        <v-img contain max-height="50px" src="/images/jriv.png"></v-img>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-if="this.$i18n.locale === 'en'" to="/">
        <v-list-item-icon>
          <v-icon class="mdi mdi-home-export-outline" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ this.$t('nav.home') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-else to="/es/">
        <v-list-item-icon>
          <v-icon class="mdi mdi-home-export-outline" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ this.$t('nav.home') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <DrawerSubNav v-if="$route.path === '/' || $route.path === '/es/'" />

      <v-list-item v-if="this.$i18n.locale === 'en'" to="/resume">
        <v-list-item-icon>
          <v-icon class="mdi mdi-earth" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ this.$t('nav.resume') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-else to="/es/resume">
        <v-list-item-icon>
          <v-icon class="mdi mdi-earth" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ this.$t('nav.resume') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/blog">
        <v-list-item-icon>
          <v-icon class="mdi mdi-file-document-outline" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>BLOG</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import DrawerSubNav from './DrawerSubNav.vue';

export default Vue.extend({
  name: 'Drawer',
  components: {
    DrawerSubNav,
  },
  // data() {
  //   return {
  //     items: [
  //       { index: false, title: this.$t('nav.home'), icon: '' },
  //       { index: false, title: this.$t('nav.resume'), icon: '' },
  //       { index: false, title: 'BLOG', icon: '' },
  //     ],
  //   };
  // },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit('SET_DRAWER', val);
      },
    },
  },
});
</script>
