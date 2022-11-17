<template>
  <div>
    <MainSection title="Search" :loading="loading">
      <Head>
        <Title>Search</Title>
      </Head>
      <TweetListFeed :tweets="searchTweets" />
    </MainSection>
  </div>
</template>

<script setup lang="ts">
const { getTweets } = useTweets();
const loading = ref<boolean>(false);
const searchTweets = ref<Tweet[]>([]);
const searchQuery = useRouter().currentRoute.value.query.q;

watch(
  () => useRouter().currentRoute.value.fullPath,
  () => getSearchedTweets()
);

onBeforeMount(() => getSearchedTweets());

async function getSearchedTweets() {
  loading.value = true;

  try {
    const { tweets } = await getTweets({ query: searchQuery });
    searchTweets.value = tweets as Tweet[];
  } catch {
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
