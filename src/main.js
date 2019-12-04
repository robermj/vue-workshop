import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import CodeSnippet from './components/CodeSnippet.vue';

Vue.config.productionTip = false;

/* Global Components */
Vue.component('app-code-snippet', CodeSnippet);

new Vue({
  /* Routing */
  router,
  /* Store */
  store,
  render: h => h(App),
}).$mount('#app');
