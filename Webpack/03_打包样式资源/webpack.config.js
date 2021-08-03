/**
 * webpack.config.js
 * 
 * 所有构建工具都是基于nodejs平台运行的，模块化默认采用commonjs。
 * 
 * 
*/
// path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
const { resolve} = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    // 输出文件名
    filename: "built.js",
    // __dirname node.js的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, "build")
  },
  // loader的配置
  module: {
    rules: [
      // 详细loader配置
      // 不同文件必需配置不同loader处理
      {
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从右到左，从下到上 依次执行
          // 创建style标签，将js中的样式资源插入进去，添加到head中生效
          "style-loader",
          // 将css文件变成commomjs模块加载js中，里面吧内容是样式字符串
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 将less文件编译成css文件
          // 需要 npm 下载less-loader与less
          "less-loader"
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [
    // 详细plugins的配置
  ],
  // 模式
  mode: "development"
  // mdoe: "production"
}