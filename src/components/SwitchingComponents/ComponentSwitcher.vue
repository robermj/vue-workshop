<template>
  <div>
    <h6>Component Switcher</h6>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-primary" @click="currentCmp = 'appA'">
        Component A
      </button>
      <button type="button" class="btn btn-secondary" @click="currentCmp = 'appB'">
        Component B
      </button>
      <button type="button" class="btn btn-info" @click="currentCmp = 'appC'">
        Component C
      </button>
    </div>
    <component :is="currentCmp"></component>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
import ComponentC from './ComponentC.vue';

export default {
  data() {
    return {
      currentCmp: 'appA',
    };
  },
  components: {
    appA: ComponentA,
    appB: ComponentB,
    appC: ComponentC,
  },
};
</script>

<style scoped>
</style>
