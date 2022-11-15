<template>
  <div>
    <TweetItem :tweet="props.tweet" />

    <TweetForm :user="props.user" placeholder="Tweet your reply" />

    <TweetListFeed :tweets="replies" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ user: User; tweet: Tweet }>();
const replies = !!props.tweet.replies ? props.tweet.replies : [];
</script>

<style scoped></style>
