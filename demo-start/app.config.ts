import { defineConfig } from "@tanstack/react-start/config"
import tsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "tailwindcss"

export default defineConfig({
  tsr: {
    appDirectory: "src",
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
    plugins: [tsConfigPaths()],
  },
})
