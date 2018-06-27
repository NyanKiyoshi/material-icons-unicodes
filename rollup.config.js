import * as pkg from './package.json';

import eslint from 'rollup-plugin-eslint';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/js/index.js',
  globals: {
    jquery: '$',
  },
  plugins: [
    eslint(),
    commonjs(),
    nodeResolve({jsnext: true})
  ],
  external: Object.keys(pkg.dependencies).concat(['path']),
  sourcemap: 'inline',
  output: [
    {
      format: 'umd',
      file: pkg['main']
    }
  ]
};
