/*
    文件系统（File System）
      - 通过Nodejs来对系统中的文件进行操作
      - 使用文件系统，需要先引入fs模块

    同步文件的写入
      - 手动操作的步骤
        1.打开
          fs.openSync(path[, flags, mode])
            - path：要打开的文件路径
            - flags：打开文件的操作类型
                r：只读
                w：可写入
            - mode：设置文件操作权限  一般不写
            该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
        2.写入
          fs.writeSync(fd, string[,position[, encoding]])
            - fd：文件的描述符
            - string：要写入的内容
            - position: 写入起始位置
            - encoding：写入的编码，默认UTF-8
        3.保存并关闭
          fs.close(fd)

*/

let fs = require("fs")
// console.log(fs);
// 打开文件
let fd = fs.openSync("helloFs.txt", "w")

// 向文件中写入内容
fs.writeSync(fd, "今天下雨了", 20)

// close file
fs.closeSync(fd)