<template>
  <div class="directives">
    <h1>Built-in Directives</h1>
    <p v-text="'Adding text using v-text directive'"></p>
    <p v-html="'<strong>Adding html using v-html</strong>'"></p>
    <hr />
    <h1>Custom Directives</h1>
    <app-code-snippet :code="d1"></app-code-snippet>
    <p>This directive will add a background-color to the div after three seconds</p>
    <p v-highlight:background.delayed="'cyan'">Using a global custom directive</p>
    <p>This directive will make the div background-color blink with a setInterval of 1 second</p>
    <p v-underline.blink="{ color1:'aliceblue', color2: 'salmon', delayed: 1000 }"
    >Using a local custom directive</p>
  </div>
</template>

<script>
import directive1 from '../codeSnippets/directives';

export default {
  data() {
    return {
      d1: directive1,
    };
  },
  directives: {
    underline: {
      bind(el, binding) {
        if (binding.modifiers.blink) {
          const mainColor = binding.value.color1;
          const secondColor = binding.value.color2;
          let currentColor = mainColor;
          setInterval(() => {
            if (currentColor === mainColor) {
              currentColor = secondColor;
            } else {
              currentColor = mainColor;
            }
            el.style.backgroundColor = currentColor; // eslint-disable-line
          }, binding.value.delayed);
        }
      },
    },
  },
};
</script>
