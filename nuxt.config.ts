// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxtjs/seo", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  seo: {
    siteName: "Anime1s",
    siteUrl: "https://anime1s.com",
    trailingSlash: true,
  },
  app: {
    head: {
      title: "Xem Anime Vietsub trọn miễn phí",
      meta: [
        {
          name: "description",
          content: "Xem anime Vietsub miễn phí, cập nhật liên tục.",
        },
        { name: "keywords", content: "anime, vietsub, xem anime" },
        { name: "author", content: "Anime1s" },
      ],
    },
  },
});
