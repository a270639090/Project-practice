const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
    // assetModuleFilename -- 输出asset与asset/resource的文件名
    // images -- 输出文件夹名
    // [hash:10] -- 为hash值的文件名 :10 hash值前10位
    // [ext] -- 原文件类型 后缀
    assetModuleFilename: "images/[hash:10][ext][query]"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(jpg|png|gif)$/,
        // 下载 url-loader ----->依赖 file-loader
        // url-loader、file-loader在webpack5 中不用了
        // img、font都用 "asset/resource"管理
        // 无法处理html中的img
        type: "asset/resource"
      },
      {
        // 处理HTML中的IMG文件
        test: /\.html$/,
        loader: "html-loader",
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: "development"
}