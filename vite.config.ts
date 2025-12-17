import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// Helper function to check if Chrome exists at a path
function getChromePath(): string | undefined {
  const possiblePaths = [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  ].filter(path => path);

  for (const path of possiblePaths) {
    if (path && fs.existsSync(path)) {
      return path;
    }
  }

  return undefined;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    open: true, // Automatically open the browser
    browser: getChromePath(), // Use Chrome if available, otherwise defaults to system default
  },
  plugins: [react()], // Removed the lovable componentTagger
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
