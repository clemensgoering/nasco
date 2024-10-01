import { readFileSync } from 'fs';
import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import typescriptEngine from 'typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import tsConfigPaths from "rollup-plugin-tsconfig-paths"

import { nodeResolve } from "@rollup/plugin-node-resolve";

const packageJson = JSON.parse(readFileSync('./package.json'));

export default defineConfig([
  {
    input: './src/index.ts',
    onwarn(warning, warn) {
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
        return;
      }
      warn(warning);
    },
    external: [/node_modules/],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      tsConfigPaths(),
      typescriptPaths(),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        }
      }),
      external({ includeDependencies: true }),
      nodeResolve({ extensions: [".tsx", ".ts", ".jsx", ".js", ".json"] }),
      resolve({
        ignoreGlobal: false,
        include: ['node_modules/**'],
        skip: ['react', 'react-dom'],
      }),
      commonjs({ include: 'node_modules/**' }),
      typescript({
        tsconfig: './tsconfig.json',
        typescript: typescriptEngine,
        sourceMap: false,
      })
    ],
  },
  {
    input: "./src/styles/main.css",
    output: [{ file: "dist/src/style/main.css", name: "style", format: "es" }],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  }
]
);