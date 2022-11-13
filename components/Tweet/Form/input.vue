<template>
  <div>
    <div class="flex items-center flex-shrink-0 p-4 pb-0">
      <!-- Profile Image -->
      <div class="flex w-12 items-top">
        <img
          :src="props.user?.profileImage"
          alt=""
          class="inline-block w-10 h-10 rounded-full"
        />
      </div>
      <!-- TextArea -->
      <div class="w-full p-2">
        <textarea
          v-model="text"
          class="w-full h-10 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0"
        ></textarea>
      </div>
    </div>

    <!-- File Selector -->
    <div class="p-4 pl-16">
      <input
        type="file"
        hidden
        ref="imageInput"
        accept="image/png, image/gif, image/jpeg, image/jpg"
        @change=""
      />
    </div>

    <!-- Icons -->
    <div class="flex p-2 pl-14">
      <Image @click="handleImageClick" />
      <Gif />
      <Chart />
      <Emoji />
      <Calendar />
    </div>
    <div>
      <button @click="handleFormSubmit">Tweet</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Image,
  Gif,
  Chart,
  Emoji,
  Calendar,
} from "~~/components/Logo/PostFormIconList";
interface User {
  username: string;
  email: string;
  name: string;
  profileImage: string;
}

const props = defineProps<{ user: User }>();
const emits = defineEmits(["onSubmit"]);

const text = ref<string>("");
const imageInput = ref<HTMLInputElement>();

const handleFormSubmit = (): void => emits("onSubmit", { text: text.value });

const handleImageClick = (): void => imageInput.value.click();

const handleImageChange = (): void => {};
</script>

<style scoped>
.w-5 {
  width: 1.25rem;
}
.h-5 {
  height: 1.25rem;
}
</style>
