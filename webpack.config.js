var path = require('path');
var webpack = require('webpack');
var WebpackBrowserPlugin = require('webpack-browser-plugin');

var src = path.resolve('src');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3333',
    'webpack/hot/only-dev-server',
    path.join(src, 'main')
  ],
  output: {
    path: './',
    pathinfo: true,
    filename: 'index.js'
  },
  devServer: {
    port: 3333,
    inline: true,
    hot: true,
    quiet: false,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: src,
        loaders: ['react-hot']
      },
      {
        test: /\.jsx?/,
        include: src,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackBrowserPlugin()
  ]
};
