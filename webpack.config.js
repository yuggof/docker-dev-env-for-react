var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'app', 'js', 'index.jsx')
  ],
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
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
      }
    ]
  }
}
