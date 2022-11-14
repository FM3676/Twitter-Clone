<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Home/ Twitter</Title>
      </Head>
      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" />
      </div>

      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>

<script setup lang="ts">
const { twitterBorderColor } = useTailwindConfig();
const { useAuthUser } = useAuth();
const { getHomeTweets } = useTweets();
const user = useAuthUser();
const loading = ref<boolean>(false);
const homeTweets = ref<Tweet[]>([]);

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { tweets } = await getHomeTweets();
    homeTweets.value = tweets as Tweet[];
  } catch {
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped></style>
