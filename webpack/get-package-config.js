const fs = require('fs-extra');
const path = require('path');
const webpack = require('webpack');
const loaders = require('./loaders');
const getPackageAlias = require('../scripts/utils/get-package-alias');

module.exports = function getPackageConfig({ base, publicPath = '/' } = {}) {
  const { name } = fs.readJsonSync(path.join(base, './package.json'));

  return {
    mode: 'production',
    devtool: false,
    entry: path.join(base, './src/index'),

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        ...getPackageAlias(name),
      },
    },

    module: {
      rules: [loaders.babel(), loaders.file()],
    },

    plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    ],
  };
};
