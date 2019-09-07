import { getEntries } from '../services/reddit-service';

export default {
  async retrieveEntries({ commit }) {
    try {
      commit('setEntries', await getEntries());
    } catch(e) {
      console.error('[Vuex::action::retrieveEntries]', e);
    }
  }
}
