<template>
  <div id="app" class="flex flex-column flex-row-ns center">
    <aside class="dn db-ns w-40-ns tl ba overflow-y-auto relative bg-black">
      <Entries :entries="entries" />
      <div class="absolute bottom-0 bg-black orange w-100 tc pv3" @click="handleDismissAll">
        Dismiss All
      </div>
    </aside>
    <section class="w-60-ns w-100 tl">
      <Entry :entry="entry" />
    </section>
  </div>
</template>

<script>
import { find, propEq } from "ramda";
import Entries from "./Entries";
import Entry from "./Entry";

export default {
  name: "App",
  components: {
    Entries,
    Entry
  },
  computed: {
    entries() {
      return this.$store.state.entries;
    },
    entry() {
      const entries = this.$store.state.entries;
      const currentEntry = this.$store.state.currentEntry;

      return entries.length && currentEntry
        ? find(propEq("id", currentEntry), entries)
        : null;
    }
  },
  async created() {
    await this.$store.dispatch("retrieveEntries");
  },
  methods: {
    handleDismissAll() {
      this.$store.commit('dismissAll');
    }
  }
};
</script>

<style lang="scss">
html {
  font-size: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
