// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8000,
  },
  app: {
    baseURL: "/nuxt3-demo/",
  },
  generate: {
    routes: ["/users/1", "/users/2", "/users/3"],
  },
});
