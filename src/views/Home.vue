<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-3">
        <app-vertical-nav></app-vertical-nav>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalNav from '@/components/VerticalNav.vue';

export default {
  name: 'home',
  components: {
    appVerticalNav: VerticalNav,
  },
};
</script>
