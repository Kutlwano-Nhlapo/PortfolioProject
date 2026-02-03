import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ALTERNATIVE CONFIG - Use this if you have issues with GitHub Pages
// This uses relative paths which work better for some hosting services

export default defineConfig({
  plugins: [react()],
  base: './',  // Relative paths - works on most hosts
})
