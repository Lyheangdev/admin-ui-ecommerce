import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  imports: { autoImport: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['nuxt-svgo', '@nuxt/image', 'nuxt-charts'],
  svgo: {
    dts: true,
    autoImportPath: false,
    componentPrefix: 'Icon',
  },
});
