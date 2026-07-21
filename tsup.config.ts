import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "es2019",
  skipNodeModulesBundle: true,
  external: ["react", "react-dom", "next"],
  // Every component is interaction- or theme-aware; marking the whole bundle
  // as a client boundary keeps App Router consumers working out of the box.
  banner: { js: '"use client";' },
});
