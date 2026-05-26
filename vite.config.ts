import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",   // ✅ required for GitHub Pages
});
