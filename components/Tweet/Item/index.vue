<template>
  <div>
    <!-- Item Header -->
    <TweetItemHeader :tweet="props.tweet" />
    <div :class="tweetBodyWrapper">
      <!-- Item Content -->
      <p
        class="flex-shrink w-auto font-medium text-gray-800 dark:text-white"
        :class="textSize"
      >
        {{ props.tweet.text }}
      </p>

      <div
        v-for="image in tweet.mediaFiles"
        :key="image.id"
        class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="twitterBorderColor"
      >
        <img :src="image.url" alt="" class="w-full rounded-2xl" />
      </div>
      <!-- Item Footer Buttons -->
      <div class="mt-2">
        <TweetItemActions :tweet="props.tweet" :compact="props.compact"  v-if="!props.hiddenActions"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { twitterBorderColor } = useTailwindConfig();
const props = withDefaults(
  defineProps<{ tweet: Tweet; compact: boolean; hiddenActions: boolean }>(),
  {
    compact: false,
    hiddenActions: false,
  }
);

const tweetBodyWrapper = props.compact ? "ml-16" : "ml-2 mt-4";
const textSize = props.compact ? "text-base" : "text-2xl";
</script>

<style scoped></style>
