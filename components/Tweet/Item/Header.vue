<template>
  <div class="flex p-4">
    <!-- Avatar -->
    <div>
      <img class="w-10 h-10 rounded-full" :src="author.profileImage" alt="" />
    </div>
    <div class="ml-3">
      <!-- User name & Post time -->
      <span class="font-medium text-gray-800 dark:text-white">
        {{ author.name }}
      </span>
      <span class="ml-3 text-sm font-medium text-gray-400">
        <NuxtLink to="#">
          {{ author.handle }}
        </NuxtLink>
        .{{ props.tweet.postedAtHuman }}
      </span>
      <p v-if="props.tweet.replyTo" class="text-sm">
        <span class="text-gray-500">Replying to </span>
        <NuxtLink :to="replyToTweetUrl" class="text-blue-400">{{
          props.tweet.replyTo.author.handle
        }}</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ tweet: Tweet }>();
const author: User = props.tweet.author;
const replyToTweetUrl = `/status/${props.tweet?.replyTo?.id}`;
</script>

<style scoped></style>
