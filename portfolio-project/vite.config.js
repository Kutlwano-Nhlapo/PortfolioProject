import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PortfolioProject/",
  // Note: Replace 'portfolio' with your actual GitHub repository name
})
