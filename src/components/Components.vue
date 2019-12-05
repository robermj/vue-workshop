<template>
  <div class="components">
    <h1>Components</h1>
    <h4>Single File Components</h4>
    <app-code-snippet :code="c1"></app-code-snippet>
    <p>Or in separate files</p>
    <app-code-snippet :code="c2"></app-code-snippet>
    <app-servers></app-servers>
    <hr>
    <h4>Slots</h4>
    <app-parent></app-parent>
    <hr>
    <h4>Component Life Cycles</h4>
    <app-life-cycles></app-life-cycles>
  </div>
</template>

<script>
import { comp1, comp2 } from '../codeSnippets/components';
import Servers from './ServersComponent/Servers.vue';
import Parent from './Slots/Parent.vue';
import LifeCycles from './LifeCycles.vue';

export default {
  data() {
    return {
      c1: comp1,
      c2: comp2,
    };
  },
  components: {
    appServers: Servers,
    appParent: Parent,
    appLifeCycles: LifeCycles,
  },
};
</script>

<style scoped>
.components {
  margin-bottom: 5rem;
}
</style>
