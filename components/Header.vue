<template>
  <v-app-bar
    app
    color="black"
    height="100"
  >
    <nuxt-link to="/">
      <v-avatar
        class="mr-3"
        color="black"
        size="70"
      >      
        <v-img
          contain
          max-height="70%"
          src="/jriv.png"
        ></v-img>
      </v-avatar>
    </nuxt-link>

    <v-spacer />
      <v-menu top :close-on-click="closeOnClick">
        <template v-slot:activator="{ on }">
          <v-toolbar-items>
          <v-btn
            text
            v-on="on"
            title="Language"
          >
            <i class="mdi mdi-earth"></i>
          </v-btn>
          </v-toolbar-items>
        </template>
        <v-list v-if="!$route.path.includes('blog')">
          <v-list-item v-if="$i18n.locale === 'es'">
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
      <v-toolbar-items v-if="$nuxt.$route.path === '/' || $nuxt.$route.path == '/es/'">
        <v-btn text @click="$vuetify.goTo('#about-me')">
          {{ this.$t('index.about') }}
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#skills')">
          {{ this.$t('index.skills') }}
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contact')">
          {{ this.$t('index.contact') }}
        </v-btn>
        <NavBar/>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn text to="/" v-if="$t.locale === 'en'">
          {{ this.$t('nav.home') }}
        </v-btn>
        <v-btn text to="/es" v-else>
          {{ this.$t('nav.home') }}
        </v-btn>
        <NavBar/>
      </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import NavBar from './NavBar'
export default {
  name: 'Header',
  data () {
    return {
      closeOnClick: true
    }
  },
  components: {
    NavBar
  }
}
</script>