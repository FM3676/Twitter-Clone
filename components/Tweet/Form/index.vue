<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>
    <div v-else>
      <TweetItem v-if="replyingTweet && usingPostModal" :tweet="replyingTweet" hidden-actions />
      <TweetFormInput
        :user="props.user"
        placeholder="Tweet your reply"
        @on-submit="handleFormSubmit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { useReplyTo } = useTweets();

const emits = defineEmits(["onSuccess"]);
const props = withDefaults(
  defineProps<{
    user: User;
    placeholder: string;
    replyTo: Tweet;
    usingPostModal: boolean;
  }>(),
  {
    replyTo: null,
    usingPostModal: false,
  }
);

const loading = ref<boolean>(false);

const replyingTweet = useReplyTo();

const { postTweet } = useTweets();

const handleFormSubmit = async (data: SubmitFormData) => {
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mdeiaFiles,
      replyTo: props.replyTo?.id,
    });
    emits("onSuccess", response.tweet);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
