<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>
    <div v-else>
      <TweetFormInput
        :user="props.user"
        placeholder="Tweet your reply"
        @on-submit="handleFormSubmit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ user: User; placeholder: string; replyTo: Tweet }>(),
  {
    replyTo: null,
  }
);

const loading = ref<boolean>(false);

const { postTweet } = useTweets();

const handleFormSubmit = async (data: SubmitFormData) => {
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mdeiaFiles,
      replyTo: props.replyTo?.id,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
