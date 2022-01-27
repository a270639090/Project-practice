let prices = {
  banana: 3,
  orange: 5,
  meat: 10
}

// Object.entries ---> 将对象转换成数组
// Object.fromEntries  ---> 将数组转换成对象

let arrPrice = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key,value * 2])
)

// console.log(arrPrice);

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function sumSalaries(salaries) {

  // 一
    return Object.values(salaries).reduce((acc, cur) => acc + cur, 0)

  // 二
  // let totle = 0
  // for (const cur of Object.values(salaries)) {
  //   totle += cur
  // }
  // return totle
}

// console.log(sumSalaries(salaries))

console.dir(Array(4));