const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: "tsconfig.build.json" })],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname,'src/styles/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@assets':path.resolve(__dirname,'src/assets/'),
      '@constants':path.resolve(__dirname, 'src/constants/'),
    },
  },
  module: {
    rules: [
      {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.build.json',
        }
      }
    },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[contenthash].[ext]',
      },
    },
  ],
},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      favicon: 'src/assets/icons/icon.svg',
    }),
    new webpack.DefinePlugin({
    'process.env.REACT_APP_OPENWEATHER_API_KEY': JSON.stringify(process.env.REACT_APP_OPENWEATHER_API_KEY),
    'process.env.REACT_APP_GOOGLE_CLIENT_ID': JSON.stringify(process.env.REACT_APP_GOOGLE_CLIENT_ID),
    'process.env.REACT_APP_GOOGLE_API_KEY': JSON.stringify(process.env.REACT_APP_GOOGLE_API_KEY),
  }),
  ],
};