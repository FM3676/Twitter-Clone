<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput
        v-model="data.username"
        label="Username"
        placeholder="@username"
      />
      <UIInput
        label="Password"
        placeholder="********"
        type="password"
        v-model="data.password"
      />

      <div>
        <button @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = reactive<{ password: string; username: string; loading: boolean }>(
  {
    password: "",
    username: "",
    loading: false,
  }
);

const handleLogin = async () => {
  const { login } = useAuth();
  data.loading = true;
  try {
    await login({ username: data.username, password: data.password });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
};
</script>

<style scoped></style>
