export default () => {
  const useReplyTo = () => useState("reply_to", () => null);

  const setReplyTo = (tweet) => {
    const replyTo = useReplyTo();
    replyTo.value = tweet;
  };

  const usePostTweetModal = () => useState("post_tweet_modal", () => false);
  const closePostTweetModal = () => {
    const postTweetModal = usePostTweetModal();
    postTweetModal.value = false;
  };
  const openPostTweetModal = () => {
    const postTweetModal = usePostTweetModal();
    postTweetModal.value = true;
  };

  const postTweet = (formData) => {
    const form = new FormData();

    form.append("text", formData.text);
    form.append("replyTo", formData.replyTo);

    formData.mediaFiles.forEach((mediaFile, index) =>
      form.append("media_file_" + index, mediaFile)
    );

    return useFetchApi("/api/user/tweets", {
      method: "POST",
      body: form,
    });
  };

  const getHomeTweets = () =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi("/api/tweets", { method: "GET" });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });

  const getTweetById = (tweetId) =>
    new Promise((resolve, reject) => {
      try {
        const response = useFetchApi(`/api/tweets/${tweetId}`);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });

  return {
    postTweet,
    getHomeTweets,
    getTweetById,
    usePostTweetModal,
    closePostTweetModal,
    openPostTweetModal,
    useReplyTo,
    setReplyTo,
  };
};
