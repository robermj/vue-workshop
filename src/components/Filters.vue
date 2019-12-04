<template>
  <div>
    <h1>Filters</h1>
    <app-code-snippet :code="fil1"></app-code-snippet>
    <p>Capitalize Filter: {{ message1 | capitalize }}</p>
    <p>To UpperCase Filter: {{ message2 | toUppercaseFilter }}</p>
    <p>To LowerCase Filter: {{ message3 | toLowercaseFilter }}</p>
    <p>Format Dolars: {{ dolars | formatDolars }}</p>
    <hr>
    <p><b>You can also create global filters</b></p>
    <app-code-snippet :code="fil2"></app-code-snippet>
  </div>
</template>

<script>
import { filter1, filter2 } from '../codeSnippets/filters';

export default {
  data() {
    return {
      fil1: filter1,
      fil2: filter2,
      message1: 'hello world',
      message2: 'hello world',
      message3: 'HELLO WORLD',
      dolars: 25000,
    };
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      value = value.toString(); // eslint-disable-line

      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    toLowercaseFilter(value) {
      if (!value) return '';
      value = value.toString(); // eslint-disable-line

      return value.toLowerCase();
    },
    toUppercaseFilter(value) {
      if (!value) return '';
      value = value.toString(); // eslint-disable-line

      return value.toUpperCase();
    },
    formatDolars(value) {
      if (!value) return '';

      return `$${value.toLocaleString()}`;
    },
  },
};
</script>
