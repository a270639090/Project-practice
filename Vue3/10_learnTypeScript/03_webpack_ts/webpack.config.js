const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "./dist")
  },
  resolve: {
    extensions: [".ts", ".js", ".csj", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      path: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  mode: "development",
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    compress: true,
    port: 8080,
    open: true
  }
}