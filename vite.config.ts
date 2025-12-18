import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import contentCollections from "@content-collections/vite";
import { devtools } from '@tanstack/devtools-vite'
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite'

export default defineConfig({
  plugins: [
    contentCollections(),
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart(),
    devtools(),
    viteReact(),
    nitro()
  ],
});
