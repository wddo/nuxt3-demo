// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8000,
  },
  ssr: process.env.NODE_ENV === "production",
  app: {
    baseURL: "/nuxt3-demo/",
    head: {
      title: "nuxt template",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "소개 문구",
        },
        {
          name: "title",
          content: "타이틀",
        },
        {
          name: "keywords",
          content: "키워드",
        },
        {
          name: "author",
          content: "wddo",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  generate: {
    routes: ["/users/1", "/users/2", "/users/3"],
  },
});
