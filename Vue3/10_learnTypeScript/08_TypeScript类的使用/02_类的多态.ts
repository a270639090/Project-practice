class Animal {
  action() {
    console.log("animal action")
  }
}

class Dog extends Animal {
  action() {
    console.log("dog running")
  }
}

class Fish extends Animal {
  action() {
    console.log("fish swimmin")
  }
}


// Animal[] ---> Animal类 类型 因为Dog、Fish继承了Animal，所以能直接赋值，不被类型判断排除
// 多态的目的是为了写出更具备通用性的代码
function makeActions(animal: Animal[]) {
  animal.forEach(animal => {
    animal.action()
  })
}

makeActions([new Dog(), new Fish])