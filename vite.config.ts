import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import frappeui from 'frappe-ui/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [frappeui({ trailingSlash: false }), vue()],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src').replace(/\/$/, '')
    }
  },
  build: {
    outDir: `../${path.basename(path.resolve('..'))}/public/salessheet`,
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true,
    target: 'es2015'
  },
  optimizeDeps: {
    include: ['frappe-ui > feather-icons', 'showdown', 'engine.io-client']
  }
})
