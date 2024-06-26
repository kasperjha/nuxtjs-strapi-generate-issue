// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  experimental: {
    payloadExtraction: true
  },

  modules: ["@nuxtjs/strapi"]
})