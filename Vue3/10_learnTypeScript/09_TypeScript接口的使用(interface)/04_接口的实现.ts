interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

// 类实现继承
class Animal {

}

// extends 继承:只能实现单继承
// implements 实现:实现接口,类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log("Fish Swimming")
  }

  eating() {
    console.log("Fish Eating")
  }
}

// 编写一些公共的API:面向对象编程
function swimAction(swimable: ISwim) {
  swimable.swimming()
}

// 1. 所有实现了接口的类对应的对象,都是可以传入
swimAction(new Fish())