import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import CodeSnippet from './components/CodeSnippet.vue';

Vue.config.productionTip = false;

/* Global Components */
Vue.component('app-code-snippet', CodeSnippet);

/* Global Directive */
Vue.directive('highlight', {
  bind(el, binding) {
    let delay = 0;
    // el.style.backgroundColor = 'cyan'
    // el.style.backgroundColor = binding.value
    if (binding.modifiers.delayed) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value; // eslint-disable-line
      } else {
        el.style.color = binding.value; // eslint-disable-line
      }
    }, delay);
  },
});

new Vue({
  /* Routing */
  router,
  /* Store */
  store,
  render: h => h(App),
}).$mount('#app');
