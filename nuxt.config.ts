// https://v3.nuxtjs.org/api/configuration/nuxt.config
import ElementPlus from "unplugin-element-plus/vite";
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["element-plus/dist/index.css"],
  build: {
    transpile: ["element-plus/es"],
  },
  vite: {
    plugins: [ElementPlus()],
  },

  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

    // Cloudinary
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  },
});
