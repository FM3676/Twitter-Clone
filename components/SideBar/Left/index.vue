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
      <div class="hidden xl:block">
        <UIButton liquid size="lg">
          <span class="font-bold"> Tweet </span>
        </UIButton>
      </div>

      <div class="block xl:hidden">
        <UIButton>
          <div class="w-6 h-6 font-bold">
            <PencilIcon />
          </div>
        </UIButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PencilIcon } from "~~/components/Logo/IconLoopRender";
import TabList from "./TabList.jsx";
const { defaultTransition } = useTailwindConfig();
</script>

<style scoped></style>
