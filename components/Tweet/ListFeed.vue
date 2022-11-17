<template>
  <div v-if="isEmptyTweet" class="p-4">
    <p class="text-center text-gray-500">No tweets</p>
  </div>
  <ul>
    <li
      v-for="tweet in props.tweets"
      :key="tweet.id"
      class="pb-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="[twitterBorderColor, defaultTransition]"
      @click.native="redirect(tweet)"
    >
      <TweetItem :tweet="tweet" compact :hidden-actions="false" />
    </li>
  </ul>
</template>

<script setup lang="ts">
const { twitterBorderColor, defaultTransition } = useTailwindConfig();
const props = defineProps<{ tweets: Tweet[] }>();
const isEmptyTweet = props.tweets.length === 0;
const redirect = (tweet:Tweet) => navigateTo(`/status/${tweet.id}`)
</script>

<style scoped></style>
