const webpack = require('webpack');
const { Config } = require('webpack-config');

module.exports = new Config().extend('webpack.base.config.js').merge({
    entry: {
    app: './src/react/index.js',
  }
});
