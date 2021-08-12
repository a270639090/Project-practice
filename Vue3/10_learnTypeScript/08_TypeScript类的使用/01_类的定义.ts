class Person {
  name: string = ""
  age: number = 0

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + "eating")
  }
}

// const p = new Person("lx", 18)
// p.eating()


// extends 类继承
class Student extends Person {
  sno: number
  
  constructor (name: string, age: number, sno: number) {
    // super :调用父类构造器
    super(name, age)
    this.sno = sno
  }

  // 继承后方法重写
  eating() {
    super.eating() // 可同时调用父类的方法
    console.log("student eating");
  }

  studying() {
    console.log(this.name + "studying");
  }
}

// class Teacher extends Person{
//   title: string = ""

//   teaching() {
//     console.log("teaching");
//   }
// }

const stu = new Student("lx", 19, 432)
stu.name = "小明"
stu.eating()
// console.log(stu);


