<template>
  <section id="blog">
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        {{ this.$t('blog.title') }}
      </h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          v-for="(post, i) in articles"
          :key="i"
          cols="12"
          md="4"
        >
          <v-img
            :src="'http://cockpit.localhost/storage/uploads/' + post.image.path"
            class="mb-4"
            height="275"
            max-width="100%"
          ></v-img>

          <h3
            class="font-weight-black mb-4 text-uppercase"
            v-text="post.title"
          ></h3>

          <div
            class="title font-weight-light mb-5"
            v-text="post.meta_description"
          ></div>

          <v-btn
            class="ml-n4 font-weight-black"
            text
            :to="'/blog/' + post.title_slug"
          >
            Continue Reading
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    articles: []
  },
  async asyncData ({ $axios }) {
    const { data } = await $axios.get(process.env.COCKPIT_POSTS_URL,
    JSON.stringify({
        filter: { published: true },
        sort: {_created:-1},
        populate: 1
      }),
    {
      headers: { 'Content-Type': 'application/json' }
    })

    return { articles: data.entries }
  }
}
</script>