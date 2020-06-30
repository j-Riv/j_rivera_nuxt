<template>
<v-container>  
  <section>
    <article class="my-8">
      <v-img
        :src="process.env.cockpitStorageUrl + post.image.path"
        max-width="100%"
        class="mb-4"
        :alt="post.title"
      ></v-img>
      <div class="text-gray-600 font-bold text-sm tracking-wide">
        <!-- <a v-for="(tag, key) in post.tags" :key="key" :href="'/blog/category/'+tag" class="ml-1">{{ tag }}</a> -->
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
      </div>
      <h1 class="mt-2 text-3xl font-bold">
        {{ post.title }}
      </h1>
      <div class="mt-4" v-html="post.content">
      </div>
    </article>
  </section>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      post: '',
      cockpitStorageUrl: process.env.COCKPIT_STORAGE_URL
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.meta_description
        }
      ]
    }
  },
  async asyncData ({ app, params, error, payload }) {
    if (payload) {
      return { post: payload }
    } else {
      let { data } = await app.$axios.post(process.env.cockpitPostsUrl,
      JSON.stringify({
          filter: { published: true, title_slug: params.title_slug },
          sort: {_created:-1},
          populate: 1
        }),
      {
        headers: { 'Content-Type': 'application/json' }
      })

      if (!data.entries[0]) {
        return error({ message: '404 Page not found', statusCode: 404 })
      }

      return { post: data.entries[0] }
    }
  }
}
</script>