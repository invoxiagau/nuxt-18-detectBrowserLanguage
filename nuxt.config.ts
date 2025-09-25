export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  ssr: true,
  i18n: {
    strategy: "prefix_except_default", // the issue is the same with 'prefix_and_default' strategy
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true, // tried with false too
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "en",
      alwaysRedirect: true, // tried with false too
    },
    locales: [
      { code: "en", name: "English", file: "en.json", config: "en" },
      { code: "fr", name: "Français", file: "fr.json", config: "fr" },
    ],
  },
});
