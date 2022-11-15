<template>
  <div>
    <!-- Item Header -->
    <TweetItemHeader :tweet="props.tweet" />
    <div class="ml-16">
      <!-- Item Content -->
      <p class="flex-shrink w-auto font-medium text-gray-800 dark:text-white">
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
        <TweetItemActions :tweet="props.tweet" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { twitterBorderColor } = useTailwindConfig();
const props = defineProps<{ tweet: Tweet }>();
</script>

<style scoped></style>
