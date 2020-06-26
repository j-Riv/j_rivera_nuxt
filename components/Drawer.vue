<template>
  <v-navigation-drawer
    :value="drawer"
    fixed
    temporary
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="/j-riv.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <!-- <v-list-item-title>j-Riv</v-list-item-title> -->
        <v-img
          contain
          max-height="50px"
          src="/jriv.png"
        ></v-img>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Drawer',
    data () {
      return {
        // drawer: null,
        items: [
          { index: false, title: this.$t('nav.home'), icon: '' },
          { index: true, title: this.$t('index.about'), icon: '' },
          { index: true, title: this.$t('index.skills'), icon: '' },
          { index: true, title: this.$t('index.contact'), icon: '' },
          { index: false, title: this.$t('nav.resume'), icon: '' },
          { index: false, title: 'BLOG', icon: '' }
        ],
      }
    },
    computed: {
      drawer () {
        return this.$store.state.drawer
      }
    }
  }
</script>