<template>
  <div>
    <Hero />
    <About />
    <!-- <Features/> -->
    <Skills />
    <Blog :articles="posts" />
    <Contact />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';
import Posts from '~/types/posts';
import Hero from '~/components/Hero.vue';
import About from '~/components/About.vue';
// import Features from '~/components/Features.vue'
import Skills from '~/components/Skills.vue';
import Blog from '~/components/Blog.vue';
import Contact from '~/components/Contact.vue';

export default Vue.extend({
  name: 'Index',
  components: {
    Hero,
    About,
    // Featured,
    Skills,
    Blog,
    Contact,
  },
  async asyncData({ $axios }: Context) {
    const { data }: Posts = await $axios.post(
      process.env.COCKPIT_POSTS_URL,
      JSON.stringify({
        filter: { published: true },
        limit: 3,
        sort: { date_published: -1 },
        populate: 1,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return { posts: data.entries };
  },
  data() {
    return {
      posts: {} as Posts,
    };
  },
  head(): Object {
    return {
      title: this.$t('index.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('about.content') + '..',
        },
      ],
    };
  },
});
</script>
