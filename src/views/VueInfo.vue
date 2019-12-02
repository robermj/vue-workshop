<template>
  <div class="vue-info">
    <div class="row">
      <div class="col">
        <app-vue-info></app-vue-info>
      </div>
    </div>
  </div>
</template>

<script>
import VueInfo from '@/components/InfoLinks.vue';

export default {
  name: 'vue-info',
  components: {
    appVueInfo: VueInfo,
  },
};
</script>
