<template>
  <div
    class="p-3 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
    :class="wrapperClasses"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { defaultTransition, twitterBorderColor } = useTailwindConfig();

const wrapperClasses: string = `${defaultTransition} ${twitterBorderColor}`;
</script>

<style scoped></style>
