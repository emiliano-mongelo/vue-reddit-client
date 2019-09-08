<template>
  <div id="app" class="flex center" v-hammer:swipe.right="openSidebar">
    <aside :class="{ 'sidebar-visible': sidebarVisible }" class="sidebar w-40 db-ns tl ba overflow-y-auto bg-black relative f6 f5-ns">
      <Entries :entries="entries" />
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      <div v-if="entries.length" class="sticky bottom-0 bg-black orange w-100 tc pv3" @click="handleDismissAll">
        Dismiss All
      </div>
    </aside>
    <section class="w-100 w-60-ns tl" @click="closeSidebar">
      <Entry :entry="entry" />
    </section>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import { find, propEq } from "ramda";
import Entries from "./Entries";
import Entry from "./Entry";

export default {
  name: "App",
  components: {
    InfiniteLoading,
    Entries,
    Entry
  },
  data() {
    return {
      sidebarVisible: false
    }
  },
  computed: {
    after() {
      return this.$store.state.after;
    },
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
  methods: {
    infiniteHandler($state) {
      this.$store.dispatch('retrieveEntries', this.after).then(() => {
        if (this.after) {
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    handleDismissAll() {
      this.$store.commit('dismissAll');
    },
    openSidebar() {
      this.sidebarVisible = true;
    },
    closeSidebar() {
      this.sidebarVisible = false;
    }
  }
};
</script>

<style>
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

.sidebar {
  transition: 250ms;
  width: 0;
}

.sidebar-visible {
  width: 100%;
}

.sticky {
  position: sticky;
}

@media screen and (min-width: 30em) {
  .sidebar {
    width: 40%;
  }
}
</style>
