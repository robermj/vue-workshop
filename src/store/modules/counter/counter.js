import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../../actionTypes';

const state = {
  counter: 0,
};

const mutations = {
  [INCREMENT_COUNTER](state) { state.counter += 1; }, // eslint-disable-line
  [DECREMENT_COUNTER](state) { state.counter -= 1; }, // eslint-disable-line
  [RESET_COUNTER](state) { state.counter = 0; }, // eslint-disable-line
};

const actions = {
  increment({ commit }) {
    commit(INCREMENT_COUNTER);
  },
  decrement({ commit }) {
    commit(DECREMENT_COUNTER);
  },
  reset({ commit }, payload) {
    setTimeout(() => {
      commit(RESET_COUNTER);
    }, payload);
  },
};

const getters = {
  getCounter: ({ counter }) => counter,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
