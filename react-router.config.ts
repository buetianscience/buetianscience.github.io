import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  // Set to false for GitHub Pages static hosting
  ssr: false,
  // This is a <org>.github.io repository (root domain), so basename should be '/'
  basename: '/',
} satisfies Config;
