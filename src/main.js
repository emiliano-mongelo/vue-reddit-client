import 'tachyons';
import Vue from 'vue';
import Vuex from 'vuex';
import { VueHammer } from 'vue2-hammer';
import { state, actions, mutations } from './store';
import App from './components/App.vue';

Vue.use(Vuex);
Vue.use(VueHammer);

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
