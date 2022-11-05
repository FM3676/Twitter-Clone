<template>
  <div class="flex flex-col">
    <!-- Preview Card: What's happening -->
    <SideBarRightPreviewCard title="What's happening">
      <SideBarRightPreviewCardItem v-for="item in whatsHappeningItems">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ item.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ item.count }}</p>
        </div>
      </SideBarRightPreviewCardItem>
    </SideBarRightPreviewCard>
    <!-- Preview Card: Who to follow -->
    <SideBarRightPreviewCard title="Who to follow">
      <SideBarRightPreviewCardItem v-for="item in whoToFollowItem">
        <div class="flex flex-row justify-between p-2">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full"
              :src="item.image"
              :alt="item.name"
            />
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ item.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ item.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button
              class="px-4 py-2 text-xs font-bold text-white bg-black rounded-full dark:text-black dark:bg-white"
            >
              Follow
            </button>
          </div>
        </div>
      </SideBarRightPreviewCardItem>
    </SideBarRightPreviewCard>
  </div>
</template>

<script setup lang="ts">
import { Tracing } from "trace_events";

const whatsHappeningItems = ref<{ title: string; count: string }[]>([
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
  {
    title: "#CodingIsFun",
    count: "8.8k Tweets",
  },
  {
    title: "#artforall",
    count: "1.8k Tweets",
  },
]);

const whoToFollowItem = ref<{ name: string; handle: string; image: string }[]>([
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://avatars.githubusercontent.com/u/73094393?s=40&v=4",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://avatars.githubusercontent.com/u/73094393?s=40&v=4",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://avatars.githubusercontent.com/u/73094393?s=40&v=4",
  },
]);
</script>

<style scoped></style>
