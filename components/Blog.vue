<template>
  <section id="blog">
    <div class="py-12"></div>

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
            <v-img :src="`${cockpitStorageUrl}${post.image.path}`" class="mb-4" height="275" max-width="100%"></v-img>
          </NuxtLink>
          <h3 class="font-weight-black mb-4 text-uppercase" v-text="post.title"></h3>

          <div class="title font-weight-light mb-5" v-text="post.meta_description"></div>

          <v-btn class="ml-n4 font-weight-black" text :to="`/blog/post/${post.title_slug}`">Continue Reading</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'BlogSection',
  props: {
    articles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      cockpitStorageUrl: process.env.COCKPIT_STORAGE_URL as string,
    };
  },
};
</script>
