<template>
  <v-container id="blog">
    <!-- <div class="py-12"></div> -->

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        Posts tagged with "{{ category }}"
      </h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1" color="white"></v-divider>

        <v-divider color="white"></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          v-for="(post, i) in posts"
          :key="i"
          cols="12"
          md="4"
        >
          <v-img
            :src="cockpitStorageUrl + post.image.path"
            :lazy-src="cockpitStorageUrl + post.image_thumbnail.path"
            class="mb-4"
            height="275"
            max-width="100%"
            :alt="post.image_alt"
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
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      cockpitStorageUrl: process.env.COCKPIT_STORAGE_URL
    }
  },
  head() {
    return {
      title: 'Blog | Posts tagged with: ' + this.$route.params.tag,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My name is José Alfredo Rivera Turcios and I build things on the internet.'
        }
      ]
    }
  },
  async asyncData ({ app, params, error, payload }) {
    if (payload) {
      return { posts: payload, category: params.tag }
    } else {
      let { data } = await app.$axios.post(process.env.COCKPIT_POSTS_URL,
      JSON.stringify({
          filter: { published: true, tags: { $in:[params.tag] } },
          sort: {_created:-1},
          populate: 1
        }),
      {
        headers: { 'Content-Type': 'application/json' }
      })

      if (!data.entries[0]) {
        return error({ message: '404 Page not found', statusCode: 404 })
      }

      return { posts: data.entries, category: params.tag }
    }
  }
}
</script>