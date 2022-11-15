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
          :placeholder="props.placeholder"
        ></textarea>
      </div>
    </div>

    <!-- File Selector -->
    <div class="p-4 pl-16">
      <img
        :src="inputImageUrl"
        alt=""
        class="rounded-2xl"
        :class="twitterBorderColor"
      />

      <input
        type="file"
        hidden
        ref="imageInput"
        accept="image/png, image/gif, image/jpeg, image/jpg"
        @change="handleImageChange"
      />
    </div>

    <!-- Icons -->
    <div class="flex p-2 pl-14">
      <Image @click="handleImageClick" />
      <Gif />
      <Chart />
      <Emoji />
      <Calendar />
      <div class="ml-auto">
        <UIButton size="sm" :disabled="isDisabled" @on-click="handleFormSubmit">
          <span class="font-bold">Tweet</span>
        </UIButton>
      </div>
    </div>
    <!-- <button @click="handleFormSubmit">Tweet</button> -->
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
const { twitterBorderColor } = useTailwindConfig();
/* Props & Emits */
const props = withDefaults(defineProps<{ user: User; placeholder: string }>(), {
  placeholder: "What's happening?",
});
const emits = defineEmits(["onSubmit"]);

/* Ref & Reactive Data */
const text = ref<string>("");
const imageInput = ref<HTMLInputElement>();
const selectedFile = ref<File>(null);
const inputImageUrl = ref<string>(null);
const isDisabled = computed<boolean>(() => text.value === "");
/* Func */

const handleFormSubmit = (): void =>
  emits("onSubmit", { text: text.value, mdeiaFiles: [selectedFile.value] });

const handleImageClick = (): void => imageInput.value.click();

const handleImageChange = (event: Event): void => {
  const file: File = (event.target as HTMLInputElement).files[0];

  selectedFile.value = file;

  const reader = new FileReader();

  reader.onload = (event) => {
    inputImageUrl.value = event.target.result as string;
  };

  reader.readAsDataURL(file);
};
</script>

<style scoped>
.w-5 {
  width: 1.25rem;
}
.h-5 {
  height: 1.25rem;
}
</style>
