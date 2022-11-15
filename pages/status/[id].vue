<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <Head>
        <Title></Title>
      </Head>
    </MainSection>
  </div>
</template>

<script setup lang="ts">
const loading = ref<boolean>(false);
const tweet = ref<Tweet>(null);
const { getTweetById } = useTweets();
const getTweetIdFromRoute = () => useRoute().params.id;

const getTweet = async () => {
  loading.value = true;
  try {
    const response = await getTweetById(getTweetIdFromRoute());
    tweet.value = response;
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
};

onBeforeMount(() => getTweet());
</script>

<style scoped></style>
