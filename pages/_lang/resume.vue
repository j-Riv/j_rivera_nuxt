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
                  <h3>{{ this.$t('resume.summary') }}</h3>
                  <hr class="mt-3 mb-3" />
                  <p>{{ this.$t('resume.summaryText') }}</p>
                </div>
                <div class="pa-5 resume-section">
                  <h3>{{ this.$t('resume.technicalSkills') }}</h3>
                  <hr class="mt-3 mb-3" />
                  <ul>
                    <li><b>{{ this.$t('resume.operatingSystems') }}:</b> macOS, Linux, Windows</li>
                    <li><b>{{ this.$t('resume.programming') }}:</b> JavaScript, NodeJS, ReactJS, PHP, Python, SQL, NoSQL, MySQL</li>
                    <li><b>{{ this.$t('resume.applications') }}:</b> Adobe Suite, MS Office Suite</li>
                  </ul>
                </div>
                <div class="pa-5 resume-section">
                  <h3>{{ this.$t('resume.experience') }}</h3>
                  <hr class="mt-3 mb-3" />
                  <v-container fluid class="pa-0">
                    <v-layout>
                      <v-flex xs6>
                        <p><b>{{ this.$t('resume.fullStackDeveloper') }}</b><br /><em>Suavecito, Inc., Santa Ana, CA</em></p>
                      </v-flex>
                      <v-flex xs6 class="text-right">
                        <p>{{ this.$t('resume.suaveDate') }}</p>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex xs12>
                        <ul>
                          <li v-for="(item, index) in this.$t('resume.suaveDesc')" :key="index">{{ item }}</li>
                        </ul>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </div>
                <div class="pa-5 resume-section">
                  <h3>{{ this.$t('resume.education') }}</h3>
                  <hr class="mt-3 mb-3" />
                  <p><b><em>{{ this.$t('resume.bootcampCertificate') }}: </em>{{ this.$t('resume.uci') }}</b>
                  <br />{{ this.$t('resume.uciDesc') }}</p>
                  <p><b>{{ this.$t('resume.occ') }}</b>
                  <br />{{ this.$t('resume.occDesc') }}</p>
                  <p><b>{{ this.$t('resume.gwc') }}</b>
                  <br />{{ this.$t('resume.gwcDesc') }}</p>
                </div>
                <div class="text-center pb-5">
                  <v-btn large color="primary" href="/resume/jose-alfredo-rivera-resume.pdf" download><i class="mdi mdi-file-pdf"></i> {{ this.$t('resume.download') }}</v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SocialNav from '~/components/SocialNav'

export default {
  name: 'Resume',
  head() {
    return {
      title: 'Resume',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Versatile Full-Stack Developer with 4+ years of experience designing, developing, and managing complex e-commerce sites and internal applications. Enjoys integrating technologies to solve problems. Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications.'
        }
      ]
    }
  },
  components: {
    SocialNav
  }
}
</script>