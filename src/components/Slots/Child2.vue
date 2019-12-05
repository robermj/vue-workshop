<template>
  <div class="child2">
    <h6>Child Component 2</h6>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script></script>

<style scoped>
.child2 {
  height: 20rem;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1rem;
  flex: 1;
}
</style>
