interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}
// 接口的继承,可继承多个
interface IActive extends ISwim, IFly {

}

// 实现共同约束
const action: IActive = {
  swimming() {},
  flying() {}
}

// --------------------
// 交叉类型
// 联合类型
type WhyType = number | string
type Direction = "left" | "right" | "center"

// 交叉类型  也能用于共同约束类型
// type WType = number & string
type MyType = ISwim & IFly
const action2: MyType = {
  swimming() {},
  flying() {}
}

export {}