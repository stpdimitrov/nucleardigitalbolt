import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'page.html',
          dest: '.'
        },
        {
          src: 'about-us',
          dest: '.'
        },
        {
          src: 'blogs',
          dest: '.'
        },
        {
          src: 'contact-us',
          dest: '.'
        },
        {
          src: 'projects',
          dest: '.'
        },
        {
          src: 'services',
          dest: '.'
        }
      ]
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
