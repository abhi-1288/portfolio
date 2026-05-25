import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    react(),
    sitemap({
      hostname: 'https://portfolio-abhijeet.vercel.app',
    }),
  )],
})
