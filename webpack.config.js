'use strict';

const webpack = require('webpack');
const JavaScriptObfuscator = require('webpack-obfuscator');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {

  context: __dirname + '/src/js',

  entry: {
    home: ["babel-polyfill", "./app.js"],
    about: ["babel-polyfill", "./script_2.js" ]
  },
  output: {
    path: 'dist/js',
   filename: "[name].js",
   library: "[name]"
 },

 resolve: {
  modules: ["node_modules"],
  extensions: ["*", ".js"]
}﻿,

resolveLoader: {
  modules: ["node_modules"],
  moduleExtensions: ['-loader'],
  extensions: ["*", ".js"]
},

module: {
  loaders: [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel',
    query: {
      presets: ['es2015']
    }
  }
  ]
},

plugins: [

new webpack.optimize.CommonsChunkPlugin({
  name: "common"
}),

new JavaScriptObfuscator({
  rotateUnicodeArray: true
}, ['home.js', 'about.js', 'common.js']),

new UglifyJSPlugin()
]

};