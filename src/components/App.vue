<template>
  <div id="app" class="flex flex-column flex-row-ns center">
    <aside class="dn db-ns w-40-ns tl ba overflow-y-auto">
      <Entries :entries="entries" />
    </aside>
    <section class="w-60-ns w-100 tl">
      <Entry v-if={entry} :entry="entry" />
    </section>
  </div>
</template>

<script>
import { find, propEq } from 'ramda';
import Entries from './Entries';
import Entry from './Entry';

export default {
  name: 'App',
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

      return entries.length
        ? this.$store.state.currentEntry
          ? find(
              propEq('id', this.$store.state.currentEntry),
              entries
            )
          : entries[0]
        : null;
    }
  },
  async created() {
    await this.$store.dispatch('retrieveEntries');
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
