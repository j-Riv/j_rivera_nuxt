<template>
  <v-sheet id="contact" class="grey darken-3" dark tag="section" tile>
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        {{ $t('contact.title') }}
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1" color="white"></v-divider>

        <v-divider color="white"></v-divider>
      </v-responsive>

      <p class="font-weight-regular mb-3 text-center">
        {{ $t('contact.message') }}
      </p>

      <v-theme-provider dark>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                :counter="25"
                :rules="nameRules"
                :label="$t('contact.fields.name') + '*'"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="$t('contact.fields.email') + '*'"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="subject"
                :rules="subjectRules"
                :label="$t('contact.fields.subject') + '*'"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="message"
                :counter="200"
                :rules="messageRules"
                :label="$t('contact.fields.message') + '*'"
                required
              ></v-textarea>
            </v-col>

            <v-col class="mx-auto" cols="auto">
              <v-btn class="text-center" color="primary" x-large @click="submit">
                {{ $t('contact.fields.submit') }}
              </v-btn>

              <v-btn class="text-center" color="primary" x-large @click="reset">
                {{ $t('contact.fields.reset') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-theme-provider>

      <v-alert v-if="success" class="mt-4" type="success">
        {{ $t('contact.fields.success') }}
      </v-alert>
      <v-alert v-if="error" class="mt-4" type="error">
        {{ $t('contact.fields.error') }}
      </v-alert>
    </v-container>

    <div class="py-12"></div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactSection',
  data: () => ({
    valid: true,
    name: '' as string,
    nameRules: [
      (v: string) => !!v || 'Name is required',
      (v: string) => (v && v.length <= 25) || 'Name must be less than 25 characters',
    ],
    email: '' as string,
    emailRules: [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    subject: '' as string,
    subjectRules: [
      (v: string) => !!v || 'Subject is required',
      (v: string) => (v && v.length <= 25) || 'Subject must be less than 25 characters',
    ],
    message: '' as string,
    messageRules: [
      (v: string) => !!v || 'Subject is required',
      (v: string) => (v && v.length <= 200) || 'Subject must be less than 200 characters',
    ],
    success: false,
    error: false,
    baseUrl: process.env.BASE_URL as string,
  }),
  methods: {
    reset(): void {
      // this.$refs.form.reset()
      (this.$refs.form as Vue & { reset: () => any }).reset();
    },
    submit(): void {
      // const val = this.$refs.form.validate()
      const val = (
        this.$refs.form as Vue & {
          validate: () => boolean;
        }
      ).validate();
      if (val) {
        const data = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        };
        this.$axios.post(this.baseUrl + '/api/contact', data).then(
          () => {
            console.log('Success');
            this.success = true;
            this.reset();
            setTimeout(() => (this.success = false), 4000);
          },
          () => {
            console.log('Error');
            this.error = true;
            this.reset();
            setTimeout(() => (this.error = false), 4000);
          }
        );
      }
    },
  },
});
</script>
