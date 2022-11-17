<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <Head>
        <Title>Tweet</Title>
      </Head>

      <TweetDetails :user="user" :tweet="tweet" />
    </MainSection>
  </div>
</template>

<script setup lang="ts">
const loading = ref<boolean>(false);
const tweet = ref<Tweet>(null);
const { getTweetById } = useTweets();
const { useAuthUser } = useAuth();
const user = useAuthUser();
const getTweetIdFromRoute = () => useRouter().currentRoute.value.params.id;

const getTweet = async () => {
  loading.value = true;
  console.log(getTweetIdFromRoute());
  try {
    const response = await getTweetById(getTweetIdFromRoute());
    tweet.value = response.tweet;
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
};

watch(
  () => useRouter().currentRoute.value.fullPath,
  () => getTweet()
);

onBeforeMount(() => getTweet());
</script>

<style scoped></style>
