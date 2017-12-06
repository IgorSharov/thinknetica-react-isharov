const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'  
  ],

  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: ['node_modules', 'src']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
