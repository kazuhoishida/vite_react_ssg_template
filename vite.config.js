import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    rollupOptions: {
      input: {'': resolve(__dirname, 'index.html')},
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo?.name?.split('.').pop() || '';
          if (/png|jpe?g|svg|webp|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          return `assets/${extType}/[name][extname]`;
        },
        entryFileNames: (assetInfo) => {
          return assetInfo.name == 'entry-server' ? `[name].js` : `assets/js/[hash].js`
        }
      },
    },
  },
})
