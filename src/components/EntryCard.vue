<template>
  <div class="pa3 bb white">
    <section>
      <span v-if="entry.unread" class="dib bg-blue br-100 unread"></span>
      <span class="pl1 f4">{{ entry.author }}</span>
      <span class="pl1 f6">{{ formatDate(entry.createdDate) }}</span>
    </section>

    <section class="mt2 flex flex-wrap flex-nowrap-ns" @click="handleEntryClick">
      <img v-if="entry.thumbnail" class="db pr2 w4" :src="entry.thumbnail">
      <span class="db">{{ entry.title }}</span>
    </section>

    <section class="mt3 justify-between flex items-center">
      <span class="red pointer">Dismiss Post</span>
      <span class="orange">{{ entry.comments }} Comments</span>
    </section>
  </div>
</template>

<script>
  import formatDate from './utils/format-date';

  export default {
    name: 'EntryCard',
    props: {
      entry: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleEntryClick() {
        this.$store.commit('setCurrentEntry', this.entry.id);
        this.$store.commit('setReadEntry', this.entry.id);
      },
      formatDate(ts) {
        return formatDate({ts, relative: true});
      }
    }
  }
</script>

<style lang="scss" scoped>
  .unread {
    width: 0.625rem;
    height: 0.625rem;
  }
</style>
