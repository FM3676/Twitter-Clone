<template>
  <div class="flex flex-col h-screen">
    <div
      class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </NuxtLink>
    </div>

    <div class="mt-2 space-y-3">
        <!-- Tab List Loop Render from More to Profile -->
      <TabList />
    </div>
  </div>
</template>

<script setup>
import { IconsRenderList } from "../../Logo/IconLoopRender";
import TabList from "./TabList.jsx";
const { defaultTransition } = useTailwindConfig();
</script>

<style scoped></style>
