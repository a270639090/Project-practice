/*
  Buffer(缓存区)
      - Buffer用于储存 前端请求发送的数据
      - Buffer的结构和数组很像，操作也类似
      - 数组中无法存储二进制文件，Buffer就是用来专门存储二进制数据的数组
      - Buffer可直接用
      - Buffer中存储的都是2进制数据，但是显示都是以16进制显示
          budder中每一个元素的范围都是从 00 - FF
      - Buffer一旦分配长度则不能再进行更改，因为本质为在内存中分配空间，规定了不能更改
      - Buffer在日志与页面显示中是以10进制的状态展现
      - bur.toSring可以转换为字符串
*/

let str = "Hello Atguigu"

var buf = Buffer.from(str)    // 从一个字符串创建一个buffer，此方法也可从数组创建
let buf2 = Buffer.alloc(1024) // 创建一个大小为1024的buffer



// console.log(buf);
// console.log(buf.length); // 占用内存的大小
// console.log(str.length); // 字符串的长度
console.log(buf2.length);