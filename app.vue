<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <!-- Loading Page -->
      <LoadingPage v-if="isAuthLoading" />
      <!-- App -->
      <div v-else-if="!!user" class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-10"
        >
          <!-- Left Sidebar -->
          <aside class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SideBarLeft @on-tweet="handleOpenTweetModal" :user="user" @logout="handleLogout" />
            </div>
          </aside>
          <!-- Main Content -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <RouterView />
          </main>
          <!-- Right Sidebar -->
          <aside class="hidden md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SideBarRight />
            </div>
          </aside>
        </div>
      </div>

      <!-- AuthPage -->
      <AuthPage v-else></AuthPage>
      <UIModal>
        <TweetForm
          :user="user"
          placeholder="What's happening"
          @on-success="handleFormSuccess"
          :reply-to="replyTo"
          using-post-modal
        />
      </UIModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Ref} from "vue";

const { useDarkMode } = useDark();
const darkMode = useDarkMode();
const { useAuthUser, useAuthLoading, initAuth, logout } = useAuth();
const { closePostTweetModal, openPostTweetModal, useReplyTo } = useTweets();
const replyTo:Ref<Tweet> = useReplyTo()
const user:Ref<User> = useAuthUser();
const isAuthLoading = useAuthLoading();

onBeforeMount(() => initAuth());

const handleFormSuccess = (tweet: Tweet) => {
  closePostTweetModal();
  navigateTo({ path: `/status/${tweet.id}` });
};

const handleOpenTweetModal = () => openPostTweetModal();

const handleLogout = () => logout()
</script>
<style scoped></style>
