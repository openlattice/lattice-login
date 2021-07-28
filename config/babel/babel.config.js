module.exports = {
  plugins: [
    'babel-plugin-styled-components',
  ],
  presets: [
    ['@babel/preset-env', {
      corejs: '3.15',
      useBuiltIns: 'entry',
    }],
    ['@babel/preset-react', {
      runtime: 'automatic',
    }],
    '@babel/preset-flow',
  ],
};
