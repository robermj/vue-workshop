<template>
  <div>
    <h6>Parent Component</h6>
    <div class="children">
      <app-child1>
        <p>Html elements passed by the parent</p>
        <ul>
          <li>Foo</li>
          <li>Foo</li>
          <li>Foo</li>
          <li>Foo</li>
        </ul>
      </app-child1>
      <app-child2>
        <div slot="header">Header</div>
        <div slot="body">Body</div>
        <div slot="footer">Footer</div>
      </app-child2>
    </div>
  </div>
</template>

<script>
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

export default {
  components: {
    appChild1: Child1,
    appChild2: Child2,
  },
};
</script>

<style scoped>
.children {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
