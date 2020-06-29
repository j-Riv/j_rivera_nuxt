<template>
  <v-sheet
    id="contact"
    class="grey darken-3"
    dark
    tag="section"
    tile
  >
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        {{ this.$t('contact.title') }}
      </h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1" color="white"></v-divider>

        <v-divider color="white"></v-divider>
      </v-responsive>

      <v-theme-provider dark>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-row>
            <v-col cols="12">
            <v-text-field
              v-model="name"
              :counter="25"
              :rules="nameRules"
              :label="this.$t('contact.fields.name') + '*'"
              required
            ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="this.$t('contact.fields.email') + '*'"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="subject"
                :rules="subjectRules"
                :label="this.$t('contact.fields.subject') + '*'"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="message"
                :counter="200"
                :rules="messageRules"
                :label="this.$t('contact.fields.message') + '*'"
                required
              ></v-textarea>
            </v-col>

            <v-col
              class="mx-auto"
              cols="auto"
            >

            <v-btn
              class="text-center"
              color="primary"
              x-large
              @click="submit"
            >
              {{ this.$t('contact.fields.submit') }}
            </v-btn>

            <v-btn
              class="text-center"
              color="primary"
              x-large
              @click="reset"
            >
              {{ this.$t('contact.fields.reset') }}
            </v-btn>
            </v-col>
          </v-row>

        </v-form>

      </v-theme-provider>

        <v-alert 
          class="mt-4"
          type="success"
          v-if="success"
        >
          {{ this.$t('contact.fields.success') }}
        </v-alert>
        <v-alert 
          class="mt-4"
          type="error"
          v-if="error"
        >
          {{ this.$t('contact.fields.error') }}
        </v-alert>
    </v-container>

    <div class="py-12"></div>
  </v-sheet>
</template>

<script>
  export default {
    name: 'Contact',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 25) || 'Name must be less than 25 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      subject: '',
      subjectRules: [
        v=> !!v || 'Subject is required',
        v => (v && v.length <= 25) || 'Subject must be less than 25 characters',
      ],
      message: '',
      messageRules: [
        v=> !!v || 'Subject is required',
        v => (v && v.length <= 200) || 'Subject must be less than 200 characters',
      ],
      success: false,
      error: false
    }),
    methods: {
      reset () {
        this.$refs.form.reset()
      },
      submit () {
        const val = this.$refs.form.validate()
        if (val) {
          const data = {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message
          }
          this.$axios.post('/api/contact', data)
            .then((response) => {
              console.log('Success')
              this.success = true
              setTimeout(() => this.success = false, 3000)
            }, (error) => {
              console.log('Error')
              this.error = true
              setTimeout(() => this.error = false, 3000)
            })
        }
      }
    }
  }
</script>