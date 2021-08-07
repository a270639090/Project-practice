// tuple元组：多种元素组合

const info: [string, number, number] = ["lx", 22, 1.70]


// 不做类型限制
// function useState(state: any) {
//   let currentState = state
//   const changeState = (newState: any) => {
//     currentState = newState
//   }
//   const tuple: [any, (newState: any) => void] = [currentState, changeState]
//   return tuple
// }
// const [counter, setCounter] = useState(10)
// setCounter(100)
// const [title, setTitle] = useState("abc")

// 优化
// <T> 泛型
function useState<T>(state: T) {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  const tuple: [T, (newState: T) => void] = [currentState, changeState]
  return tuple
}
const [counter, setCounter] = useState(10)

setCounter(100)
const [title, setTitle] = useState("abc")
const [flag, setFlag] = useState(true)


type MyFunction = () => void
const foo: MyFunction = () => {}