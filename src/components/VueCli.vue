<template>
  <div class="vueCli">
    <h1>Vue Cli</h1>
    <p>Install</p>
    <app-code-snippet :code="c1"></app-code-snippet>
    <p>Create project</p>
    <app-code-snippet :code="c2"></app-code-snippet>
    <p>Create and manage projects using the Vue UI</p>
    <app-code-snippet :code="c3"></app-code-snippet>
    <p>Add a plugin</p>
    <app-code-snippet :code="c4"></app-code-snippet>
    <p>Run app</p>
    <app-code-snippet :code="c5"></app-code-snippet>
  </div>
</template>

<script>
import {
  cli1,
  cli2,
  cli3,
  cli4,
  cli5,
} from '../codeSnippets/vue-cli';

export default {
  data() {
    return {
      c1: cli1,
      c2: cli2,
      c3: cli3,
      c4: cli4,
      c5: cli5,
    };
  },
};
</script>
