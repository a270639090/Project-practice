/**
 * public 在任何地方可见，可操作
 * private 在同一类可见，可操作
 * protected 在类自身及子类可见
 * readonly 确定后不可更改，但是能在类自身constructor中修改 类似与const定义对象
 * 
 * 访问器 setter/getter  现代类语言独拥有的
 *  set 属性 修改
 *  get 属性 return
 * 
 * static 静态成员 可直接 类名.static静态方法
 */

class People {
  name: string = ""
}