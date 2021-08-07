// function foo():never {
//   while(true) {

//   }
// }

function handleMessage(message: string | number) {
  switch (typeof message) {
    case "string":
      console.log("string方式处理message")
    break
    case "number":
      console.log("number处理方式")
    break
    default:
      // never类型
      // 用于在产生出现未曾设想的结果时进行报错提示
      const check: never = message
    break
  }
}