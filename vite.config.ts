import path, { resolve } from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/LaptopQuest/',
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Clear old files on build
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html') // Explicit entry point
      },
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})
