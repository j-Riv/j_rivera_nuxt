<template>
  <section id="blog" :key="$route.fullPath">
    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        {{ this.$t('blog.title') }}
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1" color="white"></v-divider>

        <v-divider color="white"></v-divider>
      </v-responsive>

      <v-row>
        <v-col v-for="(post, i) in articles" :key="i" cols="12" md="4">
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

          <v-chip
            v-for="(tag, key) in post.tags"
            :key="key"
            class="ma-2"
            color="primary"
            text-color="white"
            :to="`/blog/category/${tag}`"
          >
            <v-avatar left>
              <v-icon>mdi-feature-search-outline</v-icon>
            </v-avatar>
            {{ tag }}
          </v-chip>

          <div class="title font-weight-light mb-5" v-text="post.meta_description"></div>

          <v-btn class="ml-n4 font-weight-black" text :to="`/blog/post/${post.title_slug}`">Continue Reading</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <Pagination
      v-if="total > postsPerPage"
      :total-pages="Math.ceil(total / postsPerPage)"
      :current-page="this.$route.params.page ? parseInt(this.$route.params.page) : 1"
      base-path="blog"
    />

    <div class="py-12"></div>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Posts from '../../types/posts';
import Pagination from '~/components/Pagination.vue';

const postsPerPage = parseInt(process.env.POSTS_PER_PAGE as string);

export default {
  name: 'Blog',
  components: {
    Pagination,
  },
  async asyncData({ $axios, params }: Context) {
    const { data }: Posts = await $axios.post(
      process.env.COCKPIT_POSTS_URL,
      JSON.stringify({
        filter: { published: true },
        sort: { date_published: -1 },
        limit: postsPerPage,
        skip: params.page ? (Number(params.page) - 1) * postsPerPage : 0,
        populate: 1,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return {
      articles: data.entries,
      total: data.total,
    };
  },
  data() {
    return {
      articles: [],
      cockpitStorageUrl: process.env.COCKPIT_STORAGE_URL,
      postsPerPage,
    };
  },
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My name is José Alfredo Rivera Turcios and I build things on the internet.',
        },
      ],
    };
  },
};
</script>
