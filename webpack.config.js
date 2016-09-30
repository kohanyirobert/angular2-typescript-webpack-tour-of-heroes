var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './app/main.ts',
    polyfills: './app/polyfills.ts',
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: ['raw'],
      },
      {
        test: /\.ts$/,
        loader: 'ts',
      },
      {
        test: /\.scss$/,
        loaders: ['raw', 'sass'],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills'],
    }),
    new HtmlWebpackPlugin({
      title: path.basename(__dirname),
      template: './app/index.ejs',
    }),
  ]
}
