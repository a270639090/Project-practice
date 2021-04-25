let fs = require("fs")

fs.open("helloFs2.txt", "w",(err, fd) => {
  if (err) return
  fs.write(fd, "这是异步写入", err => {
    if (!err) {
      console.log("写入成功");
      fs.close(fd,err => {
        console.log("关闭");
      })
    }
  })
})