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

interface SubmitFormData {
  text: string;
  mdeiaFiles: File[];
}

const props = defineProps<{ user: User }>();

const { postTweet } = useTweets();

const handleFormSubmit = async (data:SubmitFormData) => {
  try {
      const response = await postTweet({
          text: data.text,
          mediaFiles:data.mdeiaFiles
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
