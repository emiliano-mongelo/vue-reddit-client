
export default {
  setEntries(state, entries) {
    state.entries = entries;
  },
  setCurrentEntry(state, id) {
    console.log(id);
    state.currentEntry = id;
  }
}
