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
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <!-- <v-theme-provider light>
        <v-row>
          <v-col cols="12">
            <v-text-field
              flat
              :label="this.$t('contact.fields.name') + '*'"
              solo
              name="name"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              flat
              :label="this.$t('contact.fields.email') + '*'"
              solo
              name="email"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              flat
              :label="this.$t('contact.fields.subject') + '*'"
              solo
              name="subject"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              flat
              :label="this.$t('contact.fields.message') + '*'"
              solo
              name="message"
            ></v-textarea>
          </v-col>

          <v-col
            class="mx-auto"
            cols="auto"
          >
            <v-btn
              color="primary"
              x-large
            >
              {{ this.$t('contact.fields.submit') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-theme-provider> -->

      <v-theme-provider light>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="25"
            :rules="nameRules"
            :label="this.$t('contact.fields.name') + '*'"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :label="this.$t('contact.fields.email') + '*'"
            required
          ></v-text-field>
          <v-text-field
            v-model="subject"
            :rules="subjectRules"
            :label="this.$t('contact.fields.subject') + '*'"
            required
          ></v-text-field>
          <v-textarea
            v-model="message"
            :counter="200"
            :rules="messageRules"
            :label="this.$t('contact.fields.message') + '*'"
            required
          ></v-textarea>

          <v-btn
            color="primary"
            x-large
            @click="submit"
          >
            {{ this.$t('contact.fields.submit') }}
          </v-btn>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
            color="warning"
            @click="resetValidation"
          >
            Reset Validation
          </v-btn>
        </v-form>
      </v-theme-provider>

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
      ]
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.reset()
      },
      // submit: function(e) {
      //   const form = document.getElementById('contact-form')
      //   let formData = new FormData(form)

      //   this.$axios.post('/api/contact', formData)
      //   .then((response) => {
      //     console.log('Success')
      //     console.log(response)
      //   }, (error) => {
      //     console.log('Error')
      //     console.log(error)
      //   })
      // },
      submit () {
        const val = this.$refs.form.validate()
        if (val) {
          // const formData = new FormData()
          // formData.append('name', this.name)
          // formData.append('email', this.email)
          // formData.append('subject', this.subject)
          // formData.append('message', this.message)
          // console.log('FORM DATA')
          // for (let value of formData.values()) {
          //   console.log(value)
          // }
          const data = {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message
          }
          this.$axios.post('/api/contact', data)
            .then((response) => {
              console.log('Success')
              console.log(response.data)
            }, (error) => {
              console.log('Error')
              console.log(error)
            })
        }
      }
    }
  }
</script>