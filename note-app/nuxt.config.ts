// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui"],

  runtimeConfig: {
    public: {
      supabaseApiKey: process.env.SUPABASE_API_KEY,
      supabaseApiUrl: process.env.PROJECT_URL,
    },
  },
});
