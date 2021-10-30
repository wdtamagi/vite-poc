import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: `jsx`,
    jsxInject: `import { jsx } from '@emotion/react'`,
  },
});
