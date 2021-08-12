class Person {
  name:string = "123"
  eating() {
    console.log("恰饭")
  }
}

const p = new Person()

// p1 的类型为Person
const p1: Person = {
  name: "why",
  eating() {}
}