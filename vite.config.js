import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginRadar } from "vite-plugin-radar";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: "G-FRJKDEVJ2V",
      },
      enableDev: true,
      config: {
        cookie_domain: "auto",
        cookie_expires: 63072000,
        cookie_prefix: "sehsaa",
        cookie_update: true,
        cookie_flags: "",
        send_page_view: true,
        allow_google_signals: true,
        allow_ad_personalization_signals: true,
      },
    }),
  ],
});
