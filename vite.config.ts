import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },

  server: {
    host: "0.0.0.0", // or your specific IP address, e.g., '192.168.1.111'
    port: 5173, // specify your desired port
  },
});
