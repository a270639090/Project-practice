// 通过类型（type）别名来声明对象类型
// type InfoType = { name: string, age: number }

// 另外的一种方式声明对象类型：接口interface
interface IInfoType {
  name: string
  age: number
}

const info: IInfoType = {
  name: "lx",
  age: 22
}

// 索引类型

// 通过interface来定义索引类型
interface IndexLanguage {
  [index: number]: string
}

const frontLanguage: IndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue"
}

interface LanguageYear {
  [name: string]: number
}

const languageYear: LanguageYear = {
  "C": 1972,
  "java": 1995,
  "javaScript": 1996
}
