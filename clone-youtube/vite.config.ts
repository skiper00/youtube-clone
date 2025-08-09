import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './app'),
      '@entities': path.resolve(__dirname, './entities'),
      '@features': path.resolve(__dirname, './features'),
      '@pages': path.resolve(__dirname, './pages'),
      '@shared': path.resolve(__dirname, './shared'),
      '@widgets': path.resolve(__dirname, './widgets')
    }
  }
})
