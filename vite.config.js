import { defineConfig } from "vite";

export default defineConfig({
  base: "Portfolio", // Replace with your GitHub repo name
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: "./index.html", // Ensure this is the only entry point
    },
  },
});
