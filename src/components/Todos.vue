<template>
  <div class="todos">
    <h2>Todos Component</h2>
    <div>
      <button class="btn btn-success">Add Todo</button>
      <button class="btn btn-danger" @click="emptyTodos">Empty Todos</button>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-4">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="title"
              placeholder="Todo Title"
              v-model="title"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="description"
              placeholder="Todo Description"
              v-model="description"
            />
          </div>
          <div class="form-group">
            <select name="priority" class="form-control" v-model="priority">
              <option value="Normal">Normal</option>
              <option value="Minor">Minor</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <button class="btn btn-info" @click.prevent="addTodo">Add Todo</button>
        </form>
      </div>
      <div class="col-sm-6">
        <ul class="list-group">
          <app-todo
            v-for="(todo, i) in todos"
            :todo="todo"
            :key="i"
            :index="i"
            :remove="removeTodo">
          </app-todo>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Todo from './Todo.vue';

export default {
  data() {
    return {
      title: '',
      description: '',
      priority: 'Normal',
    };
  },
  components: {
    appTodo: Todo,
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
  methods: {
    ...mapActions(['emptyTodos']),
    addTodo() {
      const todo = {
        title: this.title,
        description: this.description,
        priority: this.priority,
      };

      this.$store.dispatch('addTodo', todo);
      this.resetInputs();
    },
    removeTodo(index) {
      this.$store.dispatch('removeTodo', index);
    },
    resetInputs() {
      this.title = '';
      this.description = '';
    },
  },
};
</script>

<style scoped>
</style>
