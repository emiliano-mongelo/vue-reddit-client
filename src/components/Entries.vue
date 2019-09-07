<template>
  <div>
    <EntryCard v-for="(entry, key) in entries" :entry="entry" :key="key" />
  </div>
</template>

<script>
  import EntryCard from './EntryCard';

  export default {
    name: 'Entries',
    props: {
      entries: {
        type: Array,
        required: true
      }
    },
    components: {
      EntryCard
    }
  }
</script>
