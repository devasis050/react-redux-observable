var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module:
  {
      rules: [
          {
              exclude: /node-modules/,
              use: {
                  loader: 'babel-loader'
              }
          }
      ]
  },
};