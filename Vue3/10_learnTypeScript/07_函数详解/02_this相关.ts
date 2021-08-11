// this默认推导
const info = {
  name: "lx",
  eating() {
    console.log(this.name + "eating")
  }
}

// info.eating()

// this不明确类型
type TType = {name: string}

function eating(this: TType) {
  console.log(this.name + "eating")
}

const info2 = {
  name: "lx",
  eating: eating
}

// 隐式绑定
info2.eating()
eating.call({name: "why"})
eating.apply({name: "code"})