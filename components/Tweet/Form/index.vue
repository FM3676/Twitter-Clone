<template>
  <div><TweetFormInput :user="props.user" @on-submit="handleFormSubmit" /></div>
</template>

<script setup lang="ts">
interface User {
  username: string;
  email: string;
  name: string;
  profileImage: string;
}

const props = defineProps<{ user: User }>();

const { postTweet } = useTweets();

const handleFormSubmit = async (data) => {
  try {
    const response = await postTweet(data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
