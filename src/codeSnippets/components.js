export const comp1 = `
<template>
  <div class="components">
    <h1>Components</h1>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
`;

export const comp2 = `
<template>
  <div>This will be pre-compiled</div>
</template>
<script src="./my-component.js"></script>
<style src="./my-component.css"></style>
`;
