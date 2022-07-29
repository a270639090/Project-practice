let arr1 =  [1, 2, 3, 4, 5]
let arr2 =  [6, 7, 8, 9, 10]

// console.log([...arr1, ...arr2]);

function sum(...nums) {
  const total = nums.reduce((pre, cur) => {
    return pre + cur
  })
  // console.log(total)
}

sum(...arr1)

let person = {
  name: '小猫',
  age: 18,
  sex: 'unknow',
  action: {
    a: 1
  }
}

let person1 =  {}

// let person1 =  {...person}
// let person1 = Object.assign({}, person)
// 以上只适用于一层的对象拷贝

// 可以深拷贝
person1 = deepClone(person)

function deepClone(source) {
  'use strict'
  if(!source && typeof source !== 'object') {
    throw new Error("只适用对象或数组")
  }

  let targetObj = Array.isArray(source) ? [] : {}
  Object.keys(source).forEach(key => {
    if(source[key]&&typeof source[key] === 'object') {
      targetObj[key] = deepClone(source[key])
    } else {
      targetObj[key] = source[key]
    }
  })

  return targetObj
}

person1.name = '宇智波'
person1.action.a = 5

console.log(person);

// ...展开运算符 无法直接展开对象，但可以在{}中使用，此时变为拷贝对象