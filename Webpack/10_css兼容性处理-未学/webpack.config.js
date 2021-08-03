const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "static/js/built.js",
    path: resolve(__dirname, "build"),
    assetModuleFilename: "static"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建style标签，再将样式放入
          // "style-loader",
          // 这个loader取代style-loader。提取出css作为单独文件打包
          MiniCssExtractPlugin.loader,
          // 将css文件整合到js文件中
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/built.css"
    })
  ],
  mode: "development",
  // // 开发服务器 devServe：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
  // // 特点：只会在内存中编译打包，不会有任何输出
  // // 启动devServe指令：npx webpack server （webpack 5方法）
  // devServer: {
  //   // 运行项目目录
  //   contentBase: resolve(__dirname, "build"),
  //   // 启动gzip压缩
  //   compress: true,
  //   // 端口号
  //   port: 3000,
  //   // 自动打开默认浏览器
  //   open: true
  // }
}