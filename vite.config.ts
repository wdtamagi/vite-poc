import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    esbuild: {
      jsxFactory: `jsx`,
      jsxInject: `import { jsx } from '@emotion/react'`,
    },
    server: {
      proxy: {
        "/api": {
          target: process.env.VITE_GRAPHQL_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
