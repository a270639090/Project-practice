function makeArea(shape: Shape) {
  // 抽象类来指定类，并通过继承方式来限定通用方法的可传参类型
  return shape.getArea()
}

abstract class Shape {
  abstract getArea(): number
}

class Square extends Shape {
  private width: number
  private height: number

  constructor(width:number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  private r: number

  constructor(r: number) {
    super()
    this.r = r
  }

  getArea() {
    return 3.14 * this.r * this.r
  }
}

// makeArea("矩形")
const s = new Square(10, 20)
const c = new Circle(10)
console.log(makeArea(s));

console.log(makeArea(c))
