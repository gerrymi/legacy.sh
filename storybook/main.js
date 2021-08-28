const path = require('path');
const chalk = require('chalk');
const { argv } = require('yargs');
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const getPackagePath = require('../scripts/utils/get-package-path');
const getSrcMap = require('../scripts/utils/get-src-map');

const DEFAULT_STORIES = ['../packages/**/*.stories.@(jsx|mdx|tsx)'];
const packages = argv._;
let stories = DEFAULT_STORIES;

if (packages.length !== 0) {
  stories = [];

  packages.forEach(packageName => {
    const packagePath = getPackagePath(packageName);
    if (packagePath) {
      stories.push(path.join(packagePath, 'packages/**/*.stories.@(jsx|mdx|tsx)'));
    } else {
      process.stdout.write(chalk.yellow(`Warning: Unable to resolve ${packageName}, skipping\n`));
    }
  });
}

if (stories.length === 0) {
  process.stdout.write(
    chalk.yellow('Warning: None of the defined packages can be found, loading default set\n\n')
  );
  stories = DEFAULT_STORIES;
}

module.exports = {
  stories,
  webpackFinal: (config) => {

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...(config.resolve.alias || null),
      ...getSrcMap(),
    };
    
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    return config;
  },
};
