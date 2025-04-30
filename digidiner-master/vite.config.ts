import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // Since it's hosted at the root of your domain (digidiner.netlify.app)
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api': 'http://localhost:5001', // Proxy API requests to the backend (for local dev)
    },
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist', // Ensure this matches the Netlify publish directory setting
  },
}));
