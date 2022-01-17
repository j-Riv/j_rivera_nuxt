<template>
  <v-container id="blog">
    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Posts tagged with "{{ category }}"</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1" color="white"></v-divider>

        <v-divider color="white"></v-divider>
      </v-responsive>

      <v-row>
        <v-col v-for="(post, i) in posts" :key="i" cols="12" md="4">
          <NuxtLink :to="`/blog/post/${post.title_slug}`">
            <v-img
              :src="`${cockpitStorageUrl}${post.image.path}`"
              :lazy-src="`${cockpitStorageUrl}${post.image_thumbnail.path}`"
              class="mb-4"
              height="275"
              max-width="100%"
              :alt="post.image_alt"
            ></v-img>
          </NuxtLink>

          <h3 class="font-weight-black mb-4 text-uppercase" v-text="post.title"></h3>

          <div class="title font-weight-light mb-5" v-text="post.meta_description"></div>

          <v-btn class="ml-n4 font-weight-black" text :to="`/blog/post/${post.title_slug}`">Continue Reading</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <Pagination
      v-if="total > postsPerPage"
      :total-pages="Math.ceil(total / postsPerPage)"
      :current-page="parseInt(this.$route.params.page)"
      :base-path="`blog/category/${this.$route.params.tag}`"
    />

    <div class="py-12"></div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';
import Post from '~/types/post';
import Pagination from '~/components/Pagination.vue';

const postsPerPage = parseInt(process.env.POSTS_PER_PAGE as string);

export default Vue.extend({
  name: 'BlogCategory',
  components: {
    Pagination,
  },
  async asyncData({ $axios, params, error, payload }: Context) {
    if (payload) {
      return { posts: payload, category: params.tag };
    } else {
      const { data } = await $axios.post(
        process.env.COCKPIT_POSTS_URL,
        JSON.stringify({
          filter: { published: true, tags: { $in: [params.tag] } },
          sort: { _created: -1 },
          limit: postsPerPage,
          skip: params.page ? (Number(params.page) - 1) * postsPerPage : 0,
          populate: 1,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!data.entries[0]) {
        return error({ message: '404 Page not found', statusCode: 404 });
      }

      return { posts: data.entries, category: params.tag, total: data.total };
    }
  },
  data() {
    return {
      posts: {} as Post,
      cockpitStorageUrl: process.env.COCKPIT_STORAGE_URL as string,
      postsPerPage,
    };
  },
  head() {
    return {
      title: 'Blog | Posts tagged with: ' + this.$route.params.tag,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My name is José Alfredo Rivera Turcios and I build things on the internet.',
        },
      ],
    };
  },
});
</script>
