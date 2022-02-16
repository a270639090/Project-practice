function ask(question, ...handlers) {
  let isYes = confirm(question);
  console.log(isYes, "isYes");

  for(let handler of handlers) {
    console.log(handler.length);
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

// 对于积极的回答，两个 handler 都会被调用
// 对于负面的回答，只有第二个 handler 被调用
// ask("Question?", () => alert('You said yes'), result => alert(result));

// ------------------------------------

let sayHi = function func(who) {
  if(who) {
    alert(`Hello ${who}`)
  } else {
    func('Guest')
  }
}

// let sayHi = function func(who) {} 以这种形式命名的函数
// 如果函数是通过函数表达式的形式被声明的（不是在主代码流里），并且附带了名字，那么它被称为命名函数表达式（Named Function Expression）。这个名字可以用于在该函数内部进行自调用，例如递归调用等
// sayHi()
// func()

// ----------------------------------------------

function makeCounter() {
  let count = 0;

  function counter() {
    console.log(11111);
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter()
// counter.set()