import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Set base path for GitHub Pages
  // This is a <org>.github.io repository (root domain), so base should be '/'
  base: '/',
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: ['react-helmet-async'],
  },
});
