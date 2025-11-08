import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Set base path for GitHub Pages
  // For root domain (username.github.io), use base: '/'
  // For repository (username.github.io/repo-name), use base: '/repo-name/'
  base: process.env.GITHUB_ACTIONS ? '/buetianscience/' : '/',
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: ['react-helmet-async'],
  },
});
