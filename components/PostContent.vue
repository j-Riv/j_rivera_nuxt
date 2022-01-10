<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  render(h) {
    return h({
      template: `<div class="mt-4">${this.content}</div>`,
    });
  },
});
</script>
