let num:number = 123

num = 222

// 二进制 0b
// 八进制 0o
// 十六进制 0x
let num1: number = 100
let num2: number = 0x100
let num3: number = 0o100
let num4: number = 0b100

// console.log(num1, num2, num3, num4);

let name ="lx"
let age = 22
let height = 1.70

let message = `name: ${name} age: ${age} height:${height}`
console.log(message);

// 确定一个事实： 确定数组中的类型，保证在数组中存放相同的数据类型
const nameList: Array<string> = [] // 不推荐(react jsx中有冲突)
nameList.push("zhangsang")

const nameList2: string[] = [] // 推荐
nameList2.push("123")

const info = {
  name: "why",
  age: 17
}

let n1: null = null
let n2: undefined = undefined

const title1 = Symbol("title")
const title2 = Symbol("title")

const infosb = {
  [title1]: "cxy",
  [title2]: "teacher"
}
export {}