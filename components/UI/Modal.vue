<template>
  <el-dialog
    v-model="dialogFormVisible"
    :show-close="false"
    align-center
    :append-to-body="true"
  >
    <slot />
  </el-dialog>
</template>

<script setup lang="ts">
import { ElDialog } from "element-plus";

const { usePostTweetModal } = useTweets();

const dialogFormVisible = usePostTweetModal();
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
