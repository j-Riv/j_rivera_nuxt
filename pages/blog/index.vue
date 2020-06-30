<template>
  <section id="blog">
    <!-- <div class="py-12"></div> -->

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        {{ this.$t('blog.title') }}
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
          v-for="(post, i) in articles"
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

          <v-chip
            class="ma-2"
            color="primary"
            text-color="white"
            v-for="(tag, key) in post.tags"
            :key="key"
            :to="'/blog/category/' + tag"
          >
            <v-avatar left>
              <v-icon>mdi-feature-search-outline</v-icon>
            </v-avatar>
            {{ tag }}
          </v-chip>

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
    return {
      articles: [],
      cockpitStorageUrl: process.env.COCKPIT_STORAGE_URL
    }
  },
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My name is José Alfredo Rivera Turcios and I build things on the internet.'
        }
      ]
    }
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