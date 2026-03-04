import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Essencial para deploy na raiz do Netlify
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})