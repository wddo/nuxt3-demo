// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8000,
  },
  ssr: process.env.NODE_ENV === "production",
});
