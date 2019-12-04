import { ADD_TODO, REMOVE_TODO, EMPTY_TODOS } from '../../actionTypes';

const state = {
  todos: [],
};

const mutations = {
  [ADD_TODO](state, payload) { state.todos.push(payload); }, // eslint-disable-line
  [REMOVE_TODO](state, payload) { state.todos.splice(payload, 1); }, // eslint-disable-line
  [EMPTY_TODOS](state) { state.todos = []; }, // eslint-disable-line
};

const actions = {
  addTodo({ commit }, payload) {
    commit(ADD_TODO, payload);
  },
  removeTodo({ commit }, payload) {
    commit(REMOVE_TODO, payload);
  },
  emptyTodos({ commit }) {
    commit(EMPTY_TODOS);
  },
};

const getters = {
  getTodos: ({ todos }) => todos,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
