import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Pokertimer',
        short_name: 'App',
        description: 'Timer fürs Pokern',
        theme_color: '#222222',
        background_color: '#222222',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: './public/Logo.png',
            sizes: '500x50',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    host: true,
    port: 5173,
  }
})