<template>
  <div class="info-links">
    <h1>Vue Documentation</h1>
    <ul class="list-group">
      <li class="list-group-item text-center" v-for="({ url, name }, i) in links" :key="i">
        <a target="_blank" :href="url">{{ name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { url: 'https://vuejs.org/v2/guide/', name: 'Vue' },
        { url: 'https://cli.vuejs.org/guide/', name: 'Vue-cli' },
        { url: 'https://router.vuejs.org/', name: 'Vue router' },
        { url: 'https://vuex.vuejs.org/', name: 'Vuex' },
      ],
    };
  },
};
</script>

<style scoped>
.info-links {
  margin-top: 1rem;
}
</style>
