<template>
  <div>
    <h1>list feed</h1>
    <ul>
      <li v-for="tweet in props.tweets">{{ tweet.text }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ tweets: Tweet[] }>();
</script>

<style scoped></style>
