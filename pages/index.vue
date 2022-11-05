<template>
  <div>
    <MainSection title="Content" :loading="loading">
    Content
    </MainSection>
  </div>
</template>

<script setup lang="ts">
const loading = ref<boolean>(false);
</script>

<style scoped></style>
