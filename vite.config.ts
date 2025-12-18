import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import contentCollections from "@content-collections/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";

const config = defineConfig({
  plugins: [
    contentCollections(),
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart(),
    netlify(),
  ],
});

export default config;
