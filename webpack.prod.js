const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed || {};
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: 'warning',
  },
  plugins: [
    new webpack.DefinePlugin(envKeys), 
  ],
});