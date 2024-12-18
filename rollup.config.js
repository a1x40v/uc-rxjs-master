import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/main.ts',
    output: {
      file: 'dist/bundle.js',
      format: 'iife',
      name: 'MyBundle',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ]
  },
  {
    input: 'src/lab01/lab01.ts',
    output: {
      file: 'dist/lab01.bundle.js',
      format: 'iife',
      name: 'Lab1Bundle',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ]
  },
  {
    input: 'src/lab02/lab02.ts',
    output: {
      file: 'dist/lab02.bundle.js',
      format: 'iife',
      name: 'Lab1Bundle',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ]
  },
];
