
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

// console.log(generateTree(arr))