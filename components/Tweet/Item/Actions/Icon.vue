<template>
  <li class="flex items-center text-gray-400 cursor-pointer group">
    <div
      :class="`p-2 rounded-full group-hover:bg-${props.color}-100 
      group-hover:text-${props.color}-400 
      dark:group-hover:bg-opacity-20 ${defaultTransition}`"
    >
      <slot name="icon" :classes="`w-${props.size} h-${props.size}`" />
    </div>
    <span :class="`ml-1 group-hover:text-${props.color}-400`">
      <slot name="default" />
    </span>
  </li>
</template>

<script setup lang="ts">
const { defaultTransition } = useTailwindConfig();
const props = withDefaults(defineProps<{ color: string; size: number }>(), {
  size: 5,
});
</script>

<style scoped></style>
