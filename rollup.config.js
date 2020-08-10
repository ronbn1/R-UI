import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import pkg from "./package.json";

export default {
   input: "src/index.ts", // our source file
   output: [
      {
         file: pkg.main,
         format: "cjs",
         sourcemap: true,
      },
      {
         file: pkg.module,
         format: "es", // the preferred format
         sourcemap: true,
      },
   ],
   external: [...Object.keys(pkg.dependencies || {})],
   plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      image(),
   ],
};
