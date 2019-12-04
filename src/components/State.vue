<template>
  <div class="state">
    <h1>State Management</h1>
    <h6>Vuex Library</h6>
    <p>
      Vuex is a state management pattern + library for Vue.js applications.
      It serves as a centralized store for all the components in an application,
      with rules ensuring that the state can only be mutated in a predictable fashion.
    </p>
    <app-counter></app-counter>
    <hr>
    <app-todos></app-todos>
  </div>
</template>

<script>
import Counter from './Counter.vue';
import Todos from './Todos.vue';

export default {
  components: {
    appCounter: Counter,
    appTodos: Todos,
  },
};
</script>

<style scoped>
.state {
  margin-bottom: 5rem;
}
</style>
