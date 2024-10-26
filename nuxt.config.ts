import { Link } from "#build/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          href: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        },
      ],
    },
  },
});
