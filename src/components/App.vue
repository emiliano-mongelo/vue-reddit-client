<template>
  <div id="app" class="flex flex-column flex-row-l mw8 center ph2-l h-content pb3-l pt2-l">
    <aside class="mr3-l w-30-l w-100 ph3 ph0-l pb2 pb0-l relative tl ba">
      <Entries :entries="entries" />
    </aside>
    <section class="w-70-l w-100 pb4-l flex-grow-1">
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
