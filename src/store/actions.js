import { getEntries } from '../services/reddit-service';

export default {
  async retrieveEntries({ commit }, after) {
    try {
      const res = await getEntries(after);
      commit('setEntries', res.entries);
      commit('setAfter', res.after);
    } catch(e) {
      console.error('[Vuex::action::retrieveEntries]', e);
    }
  }
}
