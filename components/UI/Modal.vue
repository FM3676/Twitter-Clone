<template>
  <el-dialog
    v-model="dialogFormVisible"
    :show-close="false"
    align-center
    :append-to-body="true"
    @close="clearReplyingTweet"
  >
    <slot />
  </el-dialog>
</template>

<script setup lang="ts">
import { ElDialog } from "element-plus";

const { usePostTweetModal, useReplyTo, setReplyTo } = useTweets();

const dialogFormVisible = usePostTweetModal();

const clearReplyingTweet = () =>
  useReplyTo().value != null ? setReplyTo(null) : null;
</script>

<style>
header {
  display: none;
}
.ml-auto > .w-min {
  width: auto;
}
.el-dialog {
  border-radius: 1rem;
}
</style>
