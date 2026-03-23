import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      compact: true,
    },
    {
      file: pkg.module,
      format: 'es',
      compact: true,
    },
  ],
};
