const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'app.js'),
    vendor: ['angular']
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/lib/',
    filename: 'app.bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  devtool: 'cheap-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|css)$/,
        loader: 'style!css!sass',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader:'json-loader',
      },
      {
        test: /\.html$/,
        loader:'raw',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file',
        include: path.resolve(__dirname, 'client/images'),
        exclude: /node_modules/,
      }
    ],
  },
}
