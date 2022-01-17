<template>
  <div class="text-center">
    <v-pagination v-model="page" :length="totalPages" :total-visible="7" @input="next"></v-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Pagination',
  props: {
    basePath: {
      type: String,
      default: '',
    },
    totalPages: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      page: this.currentPage,
    };
  },
  methods: {
    next(page: number) {
      this.$router.push({ path: `/${this.basePath}/${page}` });
    },
  },
});
</script>
