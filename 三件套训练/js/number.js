function num(a, b) {
  return a **= b
}

// console.log(num(2, 4));

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

// console.dir(user.ref);

let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep() {
    console.log(this.step);
  }
}

ladder.up().up().down().showStep()