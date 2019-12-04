<template>
  <div class="code">
    <pre>
      {{ code }}
    </pre>
  </div>
</template>

<script>
export default {
  props: ['code'],
};
</script>

<style scoped>
.code {
  border-radius: 6px;
  background-color: rgb(30,30,30);
  font-size: 1.2rem;
  padding-left: 1rem;
}
pre {
  color: white;
  font-style: italic;
  font-family: monospace;
}
</style>
