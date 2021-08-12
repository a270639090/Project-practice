// type 定义函数类型
type TypeCalcFn = (n1: number, n2: number) => number

// interface 定义函数类型
interface CalcFn {
  (n1: number, n2: number): number
}
const add: CalcFn = (n1, n2) => {
  return n1 + n2
}

console.log(add(1, 2));
