<template>
  <div class="about">
    <div class="row">
      <div class="col">
        <app-about-info></app-about-info>
      </div>
    </div>
  </div>
</template>

<script>
import AboutInfo from '@/components/AboutInfo.vue';

export default {
  name: 'about',
  components: {
    appAboutInfo: AboutInfo,
  },
};
</script>
