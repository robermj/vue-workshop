<template>
  <div>
    <h1>Routing</h1>
    <h6>Vue Router Library</h6>
    <p>The main object:</p>
    <app-code-snippet :code="r1"></app-code-snippet>
    <p>Using it in the vue instance:</p>
    <app-code-snippet :code="r2"></app-code-snippet>
    <p>Using it inside a component:</p>
    <app-code-snippet :code="r3"></app-code-snippet>
  </div>
</template>

<script>
import { router1, router2, router3 } from '../codeSnippets/routing';

export default {
  data() {
    return {
      r1: router1,
      r2: router2,
      r3: router3,
    };
  },
};
</script>
