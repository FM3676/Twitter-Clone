<template>
  <div>
    <MainSection title="Content" :loading="loading">
      <TweetForm :user="user" />
    </MainSection>
  </div>
</template>

<script setup lang="ts">
const loading = ref<boolean>(false);
const { useAuthUser } = useAuth();
const user = useAuthUser();
</script>

<style scoped></style>
