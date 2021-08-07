
// Point： x/y -> 对象类型
function printPoint(point: {x: number, y: number}) {
  console.log(point.x);
  console.log(point.y);  
}

// printPoint({x: 123, y: 123})

// 可选类型
function printPoint2(point: {x: number, y: number, z?: number}) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}

printPoint2({x: 123, y: 456, z:789})
printPoint2({x: 123, y: 456})
