<template>
  <ul class="flex items-center justify-around w-full">
    <!-- Chat Icon -->
    <TweetItemActionsIcon :size="size" color="blue" @on-click="handleReply">
      <template #icon="{ classes }">
        <ChatIcon :class="classes" />
      </template>
      <template v-if="props.compact" #default>{{
        props.tweet.repliesCount
      }}</template>
    </TweetItemActionsIcon>
    <!-- Refresh Icon -->
    <TweetItemActionsIcon :size="size" color="green">
      <template #icon="{ classes }">
        <RefreshIcon :class="classes" />
      </template>
      <template v-if="props.compact" #default>{{
        generateRandomNumber()
      }}</template>
    </TweetItemActionsIcon>
    <!-- Heart Icon -->
    <TweetItemActionsIcon :size="size" color="red">
      <template #icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>
      <template v-if="props.compact" #default>{{
        generateRandomNumber()
      }}</template>
    </TweetItemActionsIcon>
    <!-- Shared Icon -->
    <TweetItemActionsIcon :size="size" color="blue">
      <template #icon="{ classes }">
        <SharedIcon :class="classes" />
      </template>
      <template v-if="props.compact" #default>{{
        generateRandomNumber()
      }}</template>
    </TweetItemActionsIcon>
  </ul>
</template>

<script setup lang="ts">
import {
  ChatIcon,
  RefreshIcon,
  HeartIcon,
  SharedIcon,
} from "~~/components/Logo/TweetItemIconList";

const {
  openPostTweetModal,
  setReplyTo,
} = useTweets();

const props = withDefaults(defineProps<{ tweet: Tweet; compact: boolean }>(), {
  compact: false,
});
const size = props.compact ? 5 : 8;
const generateRandomNumber = () => Math.floor(Math.random() * 100);

const handleReply = () => {
  openPostTweetModal()
  setReplyTo(props.tweet)
};
</script>

<style scoped></style>
