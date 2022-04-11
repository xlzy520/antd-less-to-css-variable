import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    lib: {
      entry: resolve(__dirname, "lib/index.js"),
      name: "antd-less2variable",
      formats: ["es"],
      fileName: format => `index.js`
    },
  },
});
