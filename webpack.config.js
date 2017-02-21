'use strict';

const webpack = require('webpack');
const JavaScriptObfuscator = require('webpack-obfuscator');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {

  entry: ["babel-polyfill", "./src/js/app.js"],
  output: {
   filename: './dist/js/dist.js',
   library: 'data'
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
new JavaScriptObfuscator({
  rotateUnicodeArray: true
}, ['dist.js']),

new UglifyJSPlugin()
]

};