/**
 * index.js Webpack入口起点文件
 * 
 *  1. 运行指令
 *     - 开发环境： webpack ./src/index.js -o ./build/built.js --mode=development
 *         webpack会以 ./src/index.js 为入口开始打包，打包后输出到 ./build/built.js
 *     - 生产环境： webpack ./src/index.js -o ./build/built.js --mode=production
 *     PS：只适用于webpack4 不是适用webpack5
 *    
 *    -------------------------------------------
 *    适用于webpack5方法 建立webpack.config.js
 *    const path = require("path")
      module.exports = {
        entry: path.join(__dirname, "./src/index.js"),  入口文件
        output: {                                       输出文件
          path: path.join(__dirname, "./build"),        输出文件地址
          filename: "built.js"                          输出文件名称
        },
        mode: "development"                              打包环境
      }

    2. 结论
      2.1 webpack能处理js/json资源，不能处理css/img等其他资源
      2.2 能将ES6模块化编译成浏览器识别的ES5模块化
      2.3 生产将压缩输出的js代码
*/

import data from "./data.json";
import "./index.css"

function add (x, y) {
  return x + y
}

console.log(data);
console.log(add(1, 5));