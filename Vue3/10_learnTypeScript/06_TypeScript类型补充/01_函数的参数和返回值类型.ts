
// 给参数加上类型注解  num1: number, num2: number
// 给返回值加上类型注释 (): number
// 在开发中，通常情况下可以不写返回值的类型(自动推荐)

function sum(num1: number, num2: number): number {
  return num1 + num2
}

const names = ["abc", "aks", "aslkd"]
names.forEach(item => {
  // item 可以不用添加类型注解
  console.log(item);
})
