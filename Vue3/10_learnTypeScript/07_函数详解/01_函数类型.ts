function foo() {}

type Footype = () => void

// 2.定义常量时,编写函数类型
type AddFnType = (num1:number, num2: number) => number
const add: AddFnType = (num1: number, num2: number) => {
  return num1 + num2
}

function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number) {
  return fn(n1, n2)
}

const res = calc(30, 40, function(a1, a2) {
  return a1 + a2 
})

// console.log(res);

// 参数默认值
// function dfFun (n1: number, n2: number = 10, n3?: number) {
//   console.log(n1, n2)
// }

// dfFun(20)

function residue(...nums: number[]) {
  let totle = 0
  for (const num of nums) {
    totle += num
  }
  return totle
}

console.log(residue(10, 20, 30, 40, 50))