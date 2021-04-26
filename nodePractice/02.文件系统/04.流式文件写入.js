let fs = require("fs")

// 流式文件写入
// 创建一个可写流

let ws = fs.createWriteStream("hello3.txt");

// 通过ws向文件中输出内容
ws.write("通过可写流写入")
ws.write("通过可写流写入")
ws.write("通过可写流写入")
ws.write("通过可写流写入")

