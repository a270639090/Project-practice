/**
 * 通过联合类型有两个去点：
 *  1.进行过多的逻辑判断
 *  2.返回值的类型是不能判断的
 */
// 实现数字或者字符串的相加
// type addType = string | number
// function add(n1: addType, n2: addType) {
//   return n1 + n2
// }

// 函数的重载: 函数的名称相同，但是参数不同的几个函数
function add(n1: number, n2: number, n3?: number): number;
function add(n1: string, n2: string, n3?: string): string;

function add(n1: any, n2: any, n3?: any): any {
  return n1 + n2 + n3
}

// console.log(add(10, 20));
// console.log(add("10", "20"));
