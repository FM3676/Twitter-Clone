<template>
  <ul class="flex items-center justify-around w-full">
    <!-- Chat Icon -->
    <TweetItemActionsIcon color="blue">
      <template #icon="{ classes }">
        <ChatIcon :class="classes" />
      </template>
      <template #default>{{ props.tweet.repliesCount }}</template>
    </TweetItemActionsIcon>
    <!-- Refresh Icon -->
    <TweetItemActionsIcon color="green">
      <template #icon="{ classes }">
        <RefreshIcon :class="classes" />
      </template>
      <template #default>{{generateRandomNumber()}}</template>
    </TweetItemActionsIcon>
    <!-- Heart Icon -->
    <TweetItemActionsIcon color="red">
      <template #icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>
      <template #default>{{generateRandomNumber()}}</template>
    </TweetItemActionsIcon>
    <!-- Shared Icon -->
    <TweetItemActionsIcon color="blue">
      <template #icon="{ classes }">
        <SharedIcon :class="classes" />
      </template>
      <template #default>{{generateRandomNumber()}}</template>
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

const props = defineProps<{ tweet: Tweet }>();
const generateRandomNumber = () => Math.floor(Math.random() * 100);
</script>

<style scoped></style>
