import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  meta: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [
      { hid: 'stripe', src: 'https://cdn.tailwindcss.com', defer: true }

    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
      },
    ],
  },
});
