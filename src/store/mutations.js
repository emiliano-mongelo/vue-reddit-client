import { map, lensProp, set, when, propEq, reject } from 'ramda';

export default {
  setEntries(state, entries) {
    state.entries = entries;
  },
  setCurrentEntry(state, id) {
    state.currentEntry = id;
  },
  setReadEntry(state, id) {
    state.entries = map(
      when(
        propEq('id', id),
        set(lensProp('unread'), false)
      )
    )(state.entries);
  },
  removeEntry(state, id) {
    state.entries = reject(propEq('id', id), state.entries);
  },
  dismissAll(state) {
    state.entries = [];
  }
}
