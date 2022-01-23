<template>
  <section id="skills">
    <v-parallax :height="$vuetify.breakpoint.smAndDown ? 700 : 500" :src="backgroundImage">
      <v-container fill-height>
        <v-row>
          <v-col class="text-center">
            <h2 class="display-2 font-weight-bold mb-1">
              {{ $t('skills.title') }}
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1" color="white"></v-divider>

              <v-divider color="white"></v-divider>
            </v-responsive>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col v-for="[title, content] of skills" :key="title" cols="12" md="3">
            <div class="text-center">
              <div class="display-1 font-weight-black mb-4" v-text="title"></div>

              <div class="font-weight-regular text-uppercase" v-text="content"></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Skills',
  data() {
    return {
      backgroundImage: '/images/thinkpad-t14-fedora-faded.jpg',
      skills: [
        [this.$t('skills.spokenLang.title'), this.$t('skills.spokenLang.content')],
        [this.$t('skills.programmingLang.title'), this.$t('skills.programmingLang.content')],
        [this.$t('skills.webTech.title'), this.$t('skills.webTech.content')],
        [this.$t('skills.software.title'), this.$t('skills.software.content')],
      ],
    };
  },
});
</script>

<style scoped>
.v-parallax {
  background-color: #222;
}
</style>
