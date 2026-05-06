// Static SPA build targeting GitHub Pages.
// Kept entirely separate from vite.config.ts so the Lovable dev/preview
// (TanStack Start on Cloudflare Workers) is unaffected.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";

// GitHub Pages serves the project at https://<user>.github.io/<repo>/
// so all asset URLs must be prefixed with the repo name.
const REPO_BASE = "/acronym-aio/";

export default defineConfig({
  base: REPO_BASE,
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  root: resolve(__dirname, "src/spa"),
  publicDir: resolve(__dirname, "src/spa/public"),
  build: {
    outDir: resolve(__dirname, "dist-pages"),
    emptyOutDir: true,
    sourcemap: false,
  },
});
