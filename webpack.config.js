// webpack.config.js

var webpack = require('webpack');
var path = require('path');
var libraryName = 'ahjo';
var outputFile = libraryName + '.js';
var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
//   module: {
//     rules: [
//       {
//         test: /(\.js)$/,
//         loader: 'babel',
//         exclude: /(node_modules)/
//       }
//     ]
//   },
  externals: [

  ]
//   resolve: {
//     root: path.resolve('./src'),
//     extensions: ['', '.js']
//   }
};

module.exports = config;