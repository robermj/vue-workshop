<template>
  <div class="conditionalsAndLists">
    <h1>Conditionals & Lists</h1>
    <h3>Conditionals</h3>
    <div class="alert alert-primary">
      <p><b>v-if / v-else</b> removes the element from the dom</p>
    </div>
    <button class="btn btn-dark" @click="displayIf = !displayIf">Show / Hide</button>
    <br><br>
    <div class="alert alert-success" v-if="displayIf">This is a success message!</div>
    <div class="alert alert-danger" v-else>This is an error message...</div>
    <div class="alert alert-primary">
      <p><b>v-show</b> hides the element in the dom, but doesn't remove it</p>
    </div>
    <button class="btn btn-dark" @click="displayShow = !displayShow">Show / Hide</button>
    <br><br>
    <div class="alert alert-warning" v-show="displayShow">This is a warning message!</div>
    <button class="btn btn-dark" @click="displayTemplate = !displayTemplate">Show / Hide</button>
    <br><br>
    <template v-if="displayTemplate">
      <div class="alert alert-secondary"><p>Inside A Template</p></div>
      <div class="alert alert-secondary"><p>Another way of using conditionals</p></div>
      <div class="alert alert-secondary"><p>To show / hide multiple elements</p></div>
    </template>
    <hr>
    <h3>Lists</h3>
    <div class="alert alert-primary">
      <p><b>v-for</b> for rendering multipe items</p>
    </div>
    <p>Simple Array</p>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, i) in simpleArray" :key="i">{{ item }}</li>
    </ul>
    <p>Objects Array</p>
    <ul class="list-group">
      <li class="list-group-item" v-for="({id, name, attr}, i) in objectArray" :key="id">
        <p>ID: {{ id }}</p>
        <p>Name: {{ name }}</p>
        <p>Attr: {{ attr }}</p>
        <p>Array Index: {{ i }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayIf: true,
      displayShow: true,
      displayTemplate: true,
      simpleArray: ['Club Sport Herediano', 'Liverpool', 'Napoli', 'Borussia Dortmund'],
      objectArray: [
        { id: 1, name: 'Foo', attr: '25' },
        { id: 2, name: 'Goo', attr: '13' },
        { id: 3, name: 'Hoo', attr: '66' },
      ],
    };
  },
};
</script>

<style scoped>
.conditionalsAndLists {
  margin-bottom: 5rem;
}
</style>
