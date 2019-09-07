<template>
  <div class="pa2 bb">
    <span class="b" @click="setCurrentEntry">{{entry.title}}</span>
  </div>
</template>

<script>
  export default {
    name: 'EntryCard',
    props: {
      entry: {
        type: Object,
        required: true
      }
    },
    methods: {
      setCurrentEntry() {
        this.$store.commit('setCurrentEntry', this.entry.id);
      }
    }
  }
</script>
