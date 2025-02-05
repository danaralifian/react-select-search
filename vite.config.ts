import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true }), tsConfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "react-select-search",
      // the proper extensions will be added
      fileName: "react-select-search",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      "react-select-search/style.css": resolve(
        __dirname,
        "node_modules/react-select-search/dist/style.css"
      ),
    },
  },
});
