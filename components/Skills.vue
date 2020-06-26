<template>
  <section id="skills">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
      src="/iphone-on-notebook-beside-laptop.jpg"
    >
      <v-container fill-height>
        <v-row>
          <v-col class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">
              {{ this.$t('skills.title') }}
            </h2>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col
            v-for="[value, title] of skills"
            :key="title"
            cols="12"
            md="3"
          >
            <div class="text-center">
              <div
                class="display-1 font-weight-black mb-4"
                v-text="value"
              ></div>

              <div
                class="title font-weight-regular text-uppercase"
                v-text="title"
              ></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
  export default {
    name: 'Skills',
    data () {
      return {
        skills: [
          [this.$t('skills.spokenLang.title'), this.$t('skills.spokenLang.content')],
          [this.$t('skills.programmingLang.title'), this.$t('skills.programmingLang.content')],
          [this.$t('skills.webTech.title'), this.$t('skills.webTech.content')],
          [this.$t('skills.software.title'), this.$t('skills.software.content')]
        ]
      }
    }
  }
</script>