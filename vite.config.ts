import { defineConfig, loadEnv } from 'vite'
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_APP_PORT, 10),
      proxy: {
        "/api": {
          target: `${env.VITE_API_URL}:${env.VITE_API_PORT}`,
          rewrite: (path) => path.replace(/^\/api/, ""),
          secure: false,
        },
      },
    },
  };
});
