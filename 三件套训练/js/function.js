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
// counter.set() 进行count设置
// counter.decrease() 进行countj-1

// --------------------------------------------------


/* .. inBetween 和 inArray 的代码

    例如: 
    let arr = [1, 2, 3, 4, 5, 6, 7];
    alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
    alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
*/

let arr = [1, 2, 3, 4, 5, 6, 7]

function inBetween(num1, num2) {
  return x => x >= num1 && x <= num2
}

function inArray(arr) {
  return x => arr.includes(x)
}

// console.log(arr.filter(inBetween(2, 5)));

const StartScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(1);
console.log(start, "start");