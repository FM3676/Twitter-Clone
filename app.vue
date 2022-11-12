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
              <SideBarLeft />
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
    </div>
  </div>
</template>

<script setup lang="ts">
const darkMode = ref<boolean>(false);
const { useAuthUser, useAuthLoading, initAuth } = useAuth();
const user = useAuthUser();
const isAuthLoading = useAuthLoading();

onBeforeMount(() => initAuth());
</script>
<style scoped></style>
