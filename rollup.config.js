import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'index.js',
    name: 'OptimizelyManager',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
