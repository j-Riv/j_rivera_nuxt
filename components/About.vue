<template>
  <section id="about-me">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">{{ this.$t('about.title') }}</h2>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1" color="white"></v-divider>

        <v-divider color="white"></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
      {{ this.$t('about.content') }}
      </v-responsive>

      <v-avatar
        class="elevation-12 mb-12"
        size="128"
      >
        <v-img src="/images/j-riv.jpg"></v-img>
      </v-avatar>

      <div></div>

      <client-only placeholder="loading...">
        <prism language="javascript">
        class Me {
          constructor() {
            name = "José Alfredo Rivera Turcios";
            dob = new Date(1987, 05, 19);
            current_location = "Garden Grove, CA";
            job = "Developer";
            interest = [Technology, Sports];
            hobbies = [Beer, Coding, Tinkering]
          }

          get name() {
            return this.name;
          }

          get dob() {
            return this.dob.toISOString();
          }
        }
        </prism>
      </client-only>
      
      <SocialNav :center="true"/>

    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
import SocialNav from './SocialNav'

export default {
  name: 'AboutSection',
  components: {
    SocialNav
  }
}
</script>