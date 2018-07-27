const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader', // creates style nodes from JS strings
        'css-loader', // translates CSS into CommonJS
        'sass-loader', // compiles Sass to CSS
      ],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};