import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  // Set to false for GitHub Pages static hosting
  ssr: false,
  // Set basename for GitHub Pages subdirectory deployment
  basename: process.env.GITHUB_ACTIONS ? '/buetianscience' : '/',
} satisfies Config;
