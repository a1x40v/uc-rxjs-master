import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
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
};
