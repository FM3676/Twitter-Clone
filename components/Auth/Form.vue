<template>
  <div class="w-full">
    <div class="flex justify-center">
      <div class="w-10 h-10">
        <LogoTwitter />
      </div>
    </div>
    <div class="pt-5 space-y-6">
      <!-- EMAIL -->
      <UIInput
        v-if="isRegistering"
        label="Email"
        placeholder="@email"
        v-model="data.email"
        type="email"
      />
      <!-- NAME -->
      <UIInput
        v-if="isRegistering"
        label="Name"
        placeholder="name"
        v-model="data.name"
      />
      <!-- USERNAME -->
      <UIInput
        v-model="data.username"
        label="Username"
        placeholder="@username"
      />
      <!-- PASSWORD -->
      <UIInput
        label="Password"
        placeholder="********"
        type="password"
        v-model="data.password"
      />
      <!-- REPEATEPASSWORD -->
      <UIInput
        v-if="isRegistering"
        label="RepeatPassword"
        placeholder="********"
        type="password"
        v-model="data.repeatPassword"
      />
      <!-- Password not same -->
      <h1
        v-if="!isPasswordSame && isRegistering"
        class="my-4 text-red-600 text-center"
      >
        Password not same
      </h1>
      <!-- Button -->
      <UIButton
        liquid
        :disabled="isButtonDisabled"
        @click="sendLoginRegisterRequest"
        >{{ isRegistering ? "Sign up" : "Sign in" }}</UIButton
      >
      <p
        class="text-gray-500 text-right pr-2 cursor-pointer"
        @click="changeRegisterOrLogin"
      >
        {{ isRegistering ? "Sign in" : "Sign up" }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { register, login } = useAuth();
const data = reactive({
  password: "",
  username: "",
  email: "",
  repeatPassword: "",
  name: "",
  loading: false,
});

const handleLogin = async () => {
  data.loading = true;
  try {
    await login({ username: data.username, password: data.password });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
};

const handleRegister = async () => {
  if (!isPasswordSame) return;

  data.loading = true;
  try {
    await register({
      username: data.username,
      password: data.password,
      name: data.name,
      repeatPassword: data.repeatPassword,
      email: data.email,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
};

const sendLoginRegisterRequest = async () =>
  isRegistering ? handleRegister() : handleLogin();

const isButtonDisabled = computed(
  () => (!data.username && !data.password) || data.loading
);

const isRegistering = ref<boolean>(false);

const isPasswordSame = computed(
  () =>
    data.password === data.repeatPassword &&
    data.password !== "" &&
    data.repeatPassword !== ""
);

const changeRegisterOrLogin = () =>
  (isRegistering.value = !isRegistering.value);
</script>

<style scoped></style>
