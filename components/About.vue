<template>
  <section id="about-me">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">
        {{ $t('about.title') }}
      </h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1" color="white"></v-divider>

        <v-divider color="white"></v-divider>
      </v-responsive>

      <v-avatar class="elevation-12 mb-12" size="128">
        <v-img src="/images/iam-jriv.jpeg"></v-img>
      </v-avatar>

      <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
        {{ $t('about.content') }}
      </v-responsive>

      <client-only placeholder="loading...">
        <prism language="javascript">
          {{ code }}
        </prism>
      </client-only>

      <div class="py-6"></div>

      <SocialNav :center="true" />
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import SocialNav from './SocialNav.vue';

const code = `
  class Me { 
    constructor() { 
      this.name = 'José Alfredo Rivera Turcios'; 
      this.currentLocation = 'California, United States'; 
      this.job = 'Developer'; 
      this.interests = [
        'Dogs', 'Linux', 'Technology', 'Motorcycles', 'Sports'
      ]; 
      this.hobbies = ['Beer', 'Coding', 'Tinkering']; 
    } 
    get name() { 
      return this.name; 
    } 
  }
`;

export default Vue.extend({
  name: 'AboutSection',
  components: {
    SocialNav,
  },
  data() {
    return {
      code,
    };
  },
});
</script>
