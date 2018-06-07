// webpack.config.js

var webpack = require('webpack');
var path = require('path');
var libraryName = 'ahjo';
var outputFile = libraryName + '.js';

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: { presets: ["es2015", "stage-1"]}
        }
        
      }
    ]
  },
  externals: []
};

module.exports = config;