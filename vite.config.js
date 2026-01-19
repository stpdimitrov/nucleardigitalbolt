import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
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
  ]
});
