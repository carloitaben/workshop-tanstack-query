import { defineConfig } from "vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "tailwindcss"

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tsConfigPaths(),
  ],
})
