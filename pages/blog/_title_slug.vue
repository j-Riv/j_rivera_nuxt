<template>
<v-container>  
  <section>
    <article class="my-8">
      <v-img
        :src="'http://cockpit.localhost/storage/uploads/' + post.image.path"
        max-width="100%"
        class="mb-4"
        :alt="post.title"
      ></v-img>
      <div class="text-gray-600 font-bold text-sm tracking-wide">
        <a v-for="(tag, key) in post.tags" :key="key" :href="'/blog/category/'+tag" class="ml-1">{{ tag }}</a>
      </div>
      <h1 class="mt-2 text-3xl font-bold">
        {{ post.title }}
      </h1>
      <div class="mt-4" v-html="post.meta_description + '\n' + post.content">
      </div>
    </article>
  </section>
</v-container>
</template>

<script>
export default {
  async asyncData ({ app, params, error, payload }) {
    if (payload) {
      return { post: payload }
    } else {
      let { data } = await app.$axios.post(process.env.COCKPIT_POSTS_URL,
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