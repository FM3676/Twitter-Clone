<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Home/ Twitter</Title>
      </Head>
      <div class="border-b" :class="twitterBorderColor">
      
        <TweetForm :user="user" />
      </div>
    </MainSection>
  </div>
</template>

<script setup lang="ts">
const { twitterBorderColor } = useTailwindConfig();
const loading = ref<boolean>(false);
const { useAuthUser } = useAuth();
const user = useAuthUser();
</script>

<style scoped></style>
