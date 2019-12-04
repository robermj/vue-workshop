<template>
  <li class="list-group-item">
    <h5>{{ todo.title }} ({{ todo.priority }})</h5>
    <p>{{ todo.description }}</p>
    <button class="btn btn-danger" @click="remove(index)">Delete</button>
  </li>
</template>

<script>
export default {
  props: ['todo', 'remove', 'index'],
};
</script>

<style scoped>
</style>
