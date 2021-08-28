module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/preset-typescript'],

  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
  ],
};
