<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="({ name, url }, i) in chapters" :key="i">
      <router-link :to="url">{{ name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      chapters: [
        { name: 'Basics', url: '/' },
        { name: 'Vue-Cli', url: '/vue-cli/' },
        { name: 'Conditionals & Lists', url: '/conditionals-lists/' },
        { name: 'Forms', url: '/forms/' },
        { name: 'Components', url: '/components/' },
        { name: 'Directives', url: '/directives/' },
        { name: 'Filters & Mixins', url: '/filters-mixins/' },
        { name: 'Animations', url: '/animations/' },
        { name: 'Requests', url: '/requests/' },
        { name: 'Routing', url: '/routing/' },
        { name: 'State', url: '/state/' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
