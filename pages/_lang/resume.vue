<template>
  <div id="projects">
    <v-container class="container--contained">
      <v-layout>
        <v-flex class="text-left">
          <v-container class="container--contained">
            <v-layout>
              <v-flex>
                <h1>José Alfredo Rivera Turcios</h1>
                <SocialNav />
                <div class="pa-5 resume-section">
                  <h3>{{ $t('resume.summary') }}</h3>
                  <hr class="mt-3 mb-3" />
                  <p>{{ $t('resume.summaryText') }}</p>
                </div>
                <div class="pa-5 resume-section">
                  <h3>{{ $t('resume.technicalSkills') }}</h3>
                  <hr class="mt-3 mb-3" />
                  <ul>
                    <li>
                      <b>{{ $t('resume.operatingSystems') }}:</b>
                      macOS, Linux, Windows
                    </li>
                    <li>
                      <b>{{ $t('resume.programming') }}:</b>
                      JavaScript, NodeJS, ReactJS, PHP, Python, SQL, NoSQL, MySQL
                    </li>
                    <li>
                      <b>{{ $t('resume.applications') }}:</b>
                      Adobe Suite, MS Office Suite
                    </li>
                  </ul>
                </div>
                <div class="pa-5 resume-section">
                  <h3>{{ $t('resume.experience') }}</h3>
                  <hr class="mt-3 mb-3" />
                  <v-container fluid class="pa-0">
                    <v-layout>
                      <v-flex xs6>
                        <p>
                          <b>{{ $t('resume.fullStackDeveloper') }}</b>
                          <br />
                          <em>Suavecito, Inc., Santa Ana, CA</em>
                        </p>
                      </v-flex>
                      <v-flex xs6 class="text-right">
                        <p>{{ $t('resume.suaveDate') }}</p>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex xs12>
                        <ul>
                          <li v-for="(item, index) in $t('resume.suaveDesc')" :key="index">
                            {{ item }}
                          </li>
                        </ul>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </div>
                <div class="pa-5 resume-section">
                  <h3>{{ $t('resume.education') }}</h3>
                  <hr class="mt-3 mb-3" />
                  <p>
                    <b>
                      <em>{{ $t('resume.bootcampCertificate') }}:</em>
                      {{ $t('resume.uci') }}
                    </b>
                    <br />
                    {{ $t('resume.uciDesc') }}
                  </p>
                  <p>
                    <b>{{ $t('resume.occ') }}</b>
                    <br />
                    {{ $t('resume.occDesc') }}
                  </p>
                  <p>
                    <b>{{ $t('resume.gwc') }}</b>
                    <br />
                    {{ $t('resume.gwcDesc') }}
                  </p>
                </div>
                <div class="text-center pb-5">
                  <v-btn large color="primary" href="/resume/jose-alfredo-rivera-resume.pdf" download>
                    <i class="mdi mdi-file-pdf"></i>
                    {{ $t('resume.download') }}
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SocialNav from '~/components/SocialNav.vue';

export default Vue.extend({
  name: 'Resume',
  components: {
    SocialNav,
  },
  head(): Object {
    return {
      title: 'Resume',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('resume.summary'),
        },
      ],
    };
  },
});
</script>
