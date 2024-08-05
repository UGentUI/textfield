// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/textfield/",
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/textfield.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "index.css") {
            return "assets/reset.css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
