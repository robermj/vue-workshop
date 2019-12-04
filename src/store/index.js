import Vue from 'vue';
import Vuex from 'vuex';


import counterModule from './modules/counter/counter';
import todosModule from './modules/todos/todos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter: counterModule,
    todos: todosModule,
  },
});
