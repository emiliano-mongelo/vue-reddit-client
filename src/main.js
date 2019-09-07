import 'tachyons';
import Vue from 'vue';
import Vuex from 'vuex';
import { state, actions, mutations } from './store';
import App from './components/App.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

new Vue({
  store,
  el: '#app',
  render: h => h(App)
});
