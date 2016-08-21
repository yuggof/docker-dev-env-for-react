var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'app', 'js', 'index.jsx'),
  output: {
    path: path.join('app', 'dist'),
    publicPath: 'http://localhost:8080/assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        query: {presets: ['es2015', 'react']}
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
