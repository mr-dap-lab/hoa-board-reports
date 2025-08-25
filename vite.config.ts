import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// CHANGE this to your repo name if not 'hoa-board-reports'
const REPO = "hoa-board-reports";

export default defineConfig({
  plugins: [react()],
  base: `/${REPO}/`,
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  }
});
