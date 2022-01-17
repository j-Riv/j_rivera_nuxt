<template>
  <v-container>
    <section>
      <article class="my-8">
        <v-img
          :src="`${cockpitStorageUrl}${post.image.path}`"
          :lazy-src="`${cockpitStorageUrl}${post.image_thumbnail.path}`"
          max-width="100%"
          class="mb-4"
          :alt="post.image_alt"
        ></v-img>
        <div class="text-gray-600 font-bold text-sm tracking-wide">
          <v-chip
            v-for="(tag, key) in post.tags"
            :key="key"
            class="ma-2"
            color="primary"
            text-color="white"
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
        <PostContent :content="post.content" />
      </article>
    </section>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';
import Prism from 'prismjs';
import PostContent from '~/components/PostContent.vue';
import Post from '~/types/post';

export default Vue.extend({
  components: { PostContent },
  async asyncData({ $axios, params, error, payload }: Context) {
    if (payload) {
      return { post: payload };
    } else {
      const { data } = await $axios.post(
        process.env.COCKPIT_POSTS_URL,
        JSON.stringify({
          filter: { published: true, title_slug: params.title_slug },
          sort: { _created: -1 },
          populate: 1,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!data.entries[0]) {
        return error({ message: '404 Page not found', statusCode: 404 });
      }

      return { post: data.entries[0] };
    }
  },
  data() {
    return {
      post: {} as Post,
      cockpitStorageUrl: process.env.COCKPIT_STORAGE_URL as string,
    };
  },
  head(): Object {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.meta_description,
        },
      ],
    };
  },
  mounted() {
    Prism.highlightAll();
  },
});
</script>

<style>
.post-image p {
  font-style: italic;
  color: #ccc;
}
</style>

<style scoped>
@media screen and (min-width: 1248px) {
  article {
    max-width: 70%;
    margin: auto;
  }
}
</style>
