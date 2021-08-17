// 类型的参数化

// 常用名称
/**
 * T: TYPE
 * K, V: KEY, VALUE
 * E: ELEMENT
 * O: OBJECT
 */

// 在我们定义函数时, 不决定这些参数的类型
// 而是让调用者以参数的形式告知
function sum<Type>(num: Type): Type {
  return num
}

// 定义类型
sum<number>(20)
sum<{name: string}> ({name: "lll"})
sum<any[]> (["abc"])

// 推导类型
sum(20)

// 接收多个参数
function foo<T, E>(age: T, age2: E) {

}
foo<number, string> (10, "123")
