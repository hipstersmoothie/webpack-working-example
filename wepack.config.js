var webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      SOME_CONSTANT: "'it worked!'",
    }),
  ],
  resolve: {
    mainFields: ['main', 'module']
  }
};
