<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Home/ Twitter</Title>
      </Head>
      <div class="border-b" :class="twitterBorderColor">
        <TweetForm
          :user="user"
          placeholder="What's happening?"
          @on-success="handleFormSuccess"
          :reply-to="null"
          :using-post-modal="false"
        />
      </div>

      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>

<script setup lang="ts">
const { twitterBorderColor } = useTailwindConfig();
const { useAuthUser } = useAuth();
const { getTweets } = useTweets();
const user = useAuthUser();
const loading = ref<boolean>(false);
const homeTweets = ref<Tweet[]>([]);

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { tweets } = await getTweets();
    homeTweets.value = tweets as Tweet[];
  } catch {
  } finally {
    loading.value = false;
  }
});

const handleFormSuccess = (tweet: Tweet) =>
  navigateTo({ path: `/status/${tweet.id}` });
</script>

<style scoped></style>
