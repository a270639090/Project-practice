
let arr = [
  { id: "001", name: "节点1" },
  { id: "0011", parentId: "001", name: "节点1-1" },
  { id: "00111", parentId: "0011", name: "节点1-1-1" },
  { id: "002", name: "节点2" },
  { id: "0021", parentId: "002", name: "节点2-1" },
  { id: "00211", parentId: "0021", name: "节点2-1-1" },
  { id: "003", name: "节点3" },
  { id: "0031", parentId: "003", name: "节点3-1" },
  { id: "00311", parentId: "0031", name: "节点3-1-1" },
  { id: "00312", parentId: "0031", name: "节点3-1-2" }
]
let arr1 = [1, 2, 3, 4, 5, 1, 1, 1] 

// 将平级结构数组转换为树状结构 递归
const generateTree = (
  list,
  parenId,
  { idName = "id", parentIdName = "parentId", childName = "children" } = {}
) => {
  return list.reduce((pre, cur) => {
    if ((cur[parentIdName] === parenId)) {
      const childern = generateTree(list, cur[idName])
      if (childName?.length) {
        cur[childName] = childern
      }
      return [...pre, cur]
    }
    return pre
  }, [])
}

// 返回已size为长度的数组分割的原数组
function chunk(arr, size =1) {
  return Array.from(
    // 决定数组长度,每段为size
    {
      length: Math.ceil(arr.length / size)
    },
    (v, i) => {
      return arr.slice(i * size, i * size + size)
    }
  )
}
// console.log(chunk(arr, 3));

// 检查数组中某元素出现的次数
function countOccurrences(arr, value) {
  return arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0)
}

// console.log(countOccurrences(arr1, 1));