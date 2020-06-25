const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const paths = require("./paths");
const common = require("./webpack-common-config.js");

module.exports = merge(common, {
  entry: {
    app: paths.appIndexJs
  },
  mode: "production",
  output: {
    filename: "[chunkhash]_[name].js",
    path: paths.appBuild,
    publicPath: "/animations/"
  },
  plugins: [
    // minify:
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(paths.appSrc), path.resolve(paths.appExamples)],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        include: [path.resolve(paths.appSrc), path.resolve(paths.appExamples)],
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  // customize optimization if necessary:
  // optimization: {
  //   splitChunks: {
  //      ...    
  //   },
  //   runtimeChunk: true
  // }
});