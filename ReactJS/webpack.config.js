
var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.join(__dirname, 'src');
var BUILD_DIR = path.join(__dirname, 'dist');

const VENDOR_LIBS = [
  'react', 'react-dom'
];

var config = {
  entry: APP_DIR + '/index.js',
  // entry: {
  //   path: APP_DIR + '/index.js',
  //   // vendor: VENDOR_LIBS
  // },
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js'
    // filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: APP_DIR,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

module.exports = config;

/*
- This is the setup as explain in this course on lynda.com
  https://www.lynda.com/Webpack-tutorials/Set-up-Babel-part-1/724808/761444-4.html

This configuration is assuming that you have a folder this file sturcture
- ReactJS
  |-dist
  | |-app.bundle.js
  | |-index.html
  |-src
  | |-app.js
  |-webpack.config.js
--------------------------------------------------------------------------------
- Using webpack to have performace increase. We will do something called Vendor
  Code Spllitting where we will create a vendor.js file that will bundle all of
  React Router, React, and other vendor libriaries. This is done so it can be
  cached and since these files usually never change then webpack wont have to
  rebundle them up and the server wont have to serve them again since they
  should already be cached.
- Minute [4:30]
- https://www.lynda.com/Webpack-tutorials/Performance-increase/724808/761449-4.html
--------------------------------------------------------------------------------
- It can be done like this but its might be better to format it how we did up
top instead

module.exports ={
  entry: './src/app.js',
  output: {
    filename: './dist/app.bundle.js'
  }
}
*/
