// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from "path"
// import svgr from "vite-plugin-svgr";


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svgr(), react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })

import svgr from "vite-plugin-svgr";
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
