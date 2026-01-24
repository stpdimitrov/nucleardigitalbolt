// vite.config.js
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import { viteStaticCopy } from "file:///home/project/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "page.html",
          dest: "."
        },
        {
          src: "about-us",
          dest: "."
        },
        {
          src: "blogs",
          dest: "."
        },
        {
          src: "contact-us",
          dest: "."
        },
        {
          src: "projects",
          dest: "."
        },
        {
          src: "services",
          dest: "."
        }
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZpdGVTdGF0aWNDb3B5KHtcclxuICAgICAgdGFyZ2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJ3BhZ2UuaHRtbCcsXHJcbiAgICAgICAgICBkZXN0OiAnLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJ2Fib3V0LXVzJyxcclxuICAgICAgICAgIGRlc3Q6ICcuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAnYmxvZ3MnLFxyXG4gICAgICAgICAgZGVzdDogJy4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdjb250YWN0LXVzJyxcclxuICAgICAgICAgIGRlc3Q6ICcuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAncHJvamVjdHMnLFxyXG4gICAgICAgICAgZGVzdDogJy4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdzZXJ2aWNlcycsXHJcbiAgICAgICAgICBkZXN0OiAnLidcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pXHJcbiAgXVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxTQUFTLHNCQUFzQjtBQUUvQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
