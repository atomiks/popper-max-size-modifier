export default [
  {
    input: './index.js',
    external: ['@popperjs/core/lib/utils/detectOverflow'],
    output: {
      file: 'dist/popper-max-size-modifier.cjs.js',
      format: 'cjs'
    }
  },
  {
    input: './index.js',
    external: ['@popperjs/core/lib/utils/detectOverflow'],
    output: {
      file: 'dist/popper-max-size-modifier.esm.js',
      format: 'esm'
    }
  }
];
