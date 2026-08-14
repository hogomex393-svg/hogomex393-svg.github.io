import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        recruiting: resolve(import.meta.dirname, "index.html"),
        graduate: resolve(import.meta.dirname, "graduate.html"),
      },
    },
  },
});
