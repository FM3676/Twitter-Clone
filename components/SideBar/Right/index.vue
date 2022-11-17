<template>
  <div class="flex flex-col">
    <!-- Search Bar -->
    <div class="relative m-2">
      <div
        class="flex items-center h-full pl-4 text-gray-600 cursor-pointer absolute"
      >
        <!-- Search Icon -->
        <div class="w-6 h-6" @click="handleSearch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <input
        v-model="search"
        type="text"
        class="flex items-center w-full pl-12 text-sm text-black font-normal dark:text-gray-100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9"
        placeholder="Search Twitter"
      />
    </div>
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
// const whatsHappeningItems = ref<{ title: string; count: string }[]>([
//   {
//     title: "SpaceX",
//     count: "18.8k Tweets",
//   },
//   {
//     title: "#CodingIsFun",
//     count: "8.8k Tweets",
//   },
//   {
//     title: "#artforall",
//     count: "1.8k Tweets",
//   },
// ]);

// const whoToFollowItem = ref<{ name: string; handle: string; image: string }[]>([
//   {
//     name: "Joe Biden",
//     handle: "@JoeBiden",
//     image: "https://avatars.githubusercontent.com/u/73094393?s=40&v=4",
//   },
//   {
//     name: "Joe Biden",
//     handle: "@JoeBiden",
//     image: "https://avatars.githubusercontent.com/u/73094393?s=40&v=4",
//   },
//   {
//     name: "Joe Biden",
//     handle: "@JoeBiden",
//     image: "https://avatars.githubusercontent.com/u/73094393?s=40&v=4",
//   },
// ]);

const whatsHappeningItems = [
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
];

const whoToFollowItem = [
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
];

const search = ref("");

const handleSearch = () =>
  useRouter().push({ path: "/search", query: { q: search.value } });
</script>

<style scoped></style>
