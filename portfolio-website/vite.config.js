import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import tailwind from '@tailwindcss/vite'   // ⬅ add this

export default defineConfig({
  resolve: {
    alias: { '@': '/resources/js' },       // optional, for "@/..." imports
  },
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'], // make sure app.css is included
      refresh: true,
    }),
    tailwind(),                             // ⬅ add this
    vue({
      template: { transformAssetUrls: { base: null, includeAbsolute: false } },
    }),
  ],
})
