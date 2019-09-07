<template>
  <div id="app">
    <aside class="w-30-ns">
      <Entries :entries="entries" />
    </aside>
    <section class="w-70-ns">
      <Entry :entry="entry" />
    </section>
  </div>
</template>

<script>
import Entries from "./components/Entries";
import Entry from "./components/Entry";

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
      return this.$store.state.entries.length
        ? this.$store.state.entries[this.$store.state.currentEntry]
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
