<template>
  <div v-if="entry">
    <span class="b">{{entry.title}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Entry',
    props: ['entry']
  }
</script>
