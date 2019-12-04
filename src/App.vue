<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    appNavbar: Navbar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
