<template>
  <div class="basics">
    <h1>Vue Basics</h1>
    <div class="alert alert-primary">
      <p>Progressive framework for building user interfaces</p>
      <p>Lean and small 16kb core framework.</p>
      <p>Using directly in the html: <b><i>{{ cdnLink }}</i></b></p>
    </div>
    <p>The Vue object usually looks like this: </p>
    <app-code-snippet :code="b1"></app-code-snippet>
    <button class="btn btn-info" @click="logThisConsole">
      Log in console the value of THIS
    </button>
    <br><br>
    <div class="alert alert-primary">
      <p>Original Text: {{ text }}</p>
      <p>Reverted text: {{ revertText }}</p>
    </div>
    <div class="alert alert-primary">
      <p>Bind attributes</p>
      <p>Using <b>v-bind:attribute</b> or <b>:attribute</b></p>
      <p>Example: v-bind:id="dynamicId" or :disabled="isButtonDisabled"</p>
    </div>
    <div class="alert alert-primary">
      <p>Vue Events: <b>vue-on:event</b> or <b>@event</b></p>
      <p>Event modifiers: </p>
      <ul>
        <li>stop</li>
        <li>prevent</li>
        <li>passive</li>
      </ul>
      <p>Key codes: </p>
      <ul>
        <li>enter</li>
        <li>tab</li>
        <li>space</li>
      </ul>
    </div>
    <div class="coordinates" v-on:mousemove="getCoordenates">
      <p>Mouse coordinates: ({{ x }},{{ y }})</p>
      <span v-on:mousemove.stop>DEAD SPOT</span>
    </div>
    <div class="styling">
      <h1>Styling</h1>
      <button class="btn btn-warning" @click="changeDivClass">Change div class</button>
      <div class="styles" v-bind:class="{ active: isActive, 'text-danger': hasError }">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </div>
    </div>
  </div>
</template>
<script>
import basic1 from '../codeSnippets/basics';

export default {
  data() {
    return {
      cdnLink: '<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>', // eslint-disable-line
      b1: basic1,
      text: 'Hello World!',
      x: 0,
      y: 0,
      isActive: true,
      hasError: false,
    };
  },
  methods: {
    updateText(newText) {
      this.text = newText;
    },
    getCoordenates(e) {
      this.x = e && e.clientX;
      this.y = e && e.clientY;
    },
    logThisConsole() {
      console.log(this);
    },
    changeDivClass() {
      this.isActive = !this.isActive;
      this.hasError = !this.hasError;
    },
  },
  computed: {
    revertText() {
      return this.text.split('').reverse().join('');
    },
  },
};
</script>

<style scoped>
.basics {
  margin-bottom: 5rem;
}
.coordinates {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  border:1px solid black;
}

.coordinates span {
  border: 1px solid red;
  position: absolute;
  top: 75%;
  right: 5%;
  width: 10rem;
  text-align: center;
}
.styles {
  border-radius: 10px;
  padding: 1rem;
}
.active {
  background-color:lightgreen;
  border: 1px solid green;
}

.text-danger {
  background-color: lightsalmon;
  border: 1px solid red;

}
</style>
