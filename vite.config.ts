import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/bili': {
        target: 'https://api.bilibili.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bili/, '')
      },
      '/card': {
        target: 'https://api.bilibili.com/x/web-interface', //mid
        changeOrigin: true
      },
      '/search': {
        target: 'https://api.bilibili.com/x/space/arc', //mid,pn
        changeOrigin: true
      },
      '/view': {
        target: 'https://api.bilibili.com/x/web-interface', //bvid
        changeOrigin: true
      },
      '/stat': {
        target: 'https://api.bilibili.com/x/web-interface/archive', //bvid
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve("src/static/less/index.less")}";`,
        },
        javascriptEnabled: true,
      },
    },
  }
})