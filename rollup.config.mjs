import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import json from '@rollup/plugin-json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js', // Replace pkg.main if needed
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/bundle.esm.js', // Replace pkg.module if needed
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    json(),
    url({ exclude: ['**/*.svg'] }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}
