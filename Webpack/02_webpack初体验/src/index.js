/**
 * index.js Webpack入口起点文件
 * 
 *  1. 运行指令
 *     - 开发环境： webpack ./src/index.js -o ./build/built.js -- 
 * 
*/

function add (x, y) {
  return x + y
}

console.log(add(1, 5));