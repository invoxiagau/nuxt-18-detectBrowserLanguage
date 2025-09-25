// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  ssr: true,
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "en",
      alwaysRedirect: true,
    },
    locales: [
      { code: "en", name: "English", file: "en.json", config: "en" },
      { code: "fr", name: "Français", file: "fr.json", config: "fr" },
    ],
  },
});
