<template>
  <div v-if="entry" class="pa3">
    <span class="db b">{{entry.author}}</span>
    <img v-if="entry.thumbnail" class="db w4 pt2" :src="entry.thumbnail">
    <span class="db b pt2">{{entry.title}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Entry',
    props: ['entry']
  }
</script>
