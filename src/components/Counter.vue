<template>
  <div class="counter">
    <h2>Counter Component</h2>
    <div class="alert alert-primary">Counter: {{ counter }}</div>
    <div>
      <button class="btn btn-success" @click="increment">Increment Counter</button>
      <button class="btn btn-warning" @click="decrement">Decrease Counter</button>
      <button class="btn btn-danger" @click="reset(2000)">Reset Counter (Have a delay)</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    },
  },
  methods: {
    ...mapActions(['increment', 'decrement', 'reset']),
  },
};
</script>

<style scoped>
</style>
