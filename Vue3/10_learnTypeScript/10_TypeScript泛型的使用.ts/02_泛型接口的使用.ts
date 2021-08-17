interface IPerson<T1, T2> {
  name: T1
  age: T2
}

const p: IPerson<string, number> = {
  name: "ll",
  age: 15
}

interface ILength {
  length: number
}

function getLength<T extends ILength> (arr: T) {
  return arr.length
}



console.log(getLength("124"))
