<template>
  <button
    class="flex justify-center text-white bg-blue-400 rounded-full hover:bg-blue-500 font-sm disabled:bg-blue-300 disabled:cursor-not-allowed"
    :disabled="props.disabled"
    :class="classes"
  >
    <span :class="textFontSize">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  disabled: { type: Boolean, default: false },
  size: { type: String, default: "md" },
  liquid: { type: Boolean, default: false },
});

const paddingClasses: string =
  props.size === "sm"
    ? "px-3 py-2"
    : props.size === "lg"
    ? "px-4 py-3"
    : "py-3 px-3";

const textFontSize: string = props.size === "lg" ? "text-md" : "text-sm";

const classes: string = `${paddingClasses} ${
  props.liquid ? "w-full" : "w-min"
} `;
</script>

<style scoped></style>
