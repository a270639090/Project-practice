class Compile {

  constructor(el, vm) {
    this.el = isElementNode(el) ? el : document.querySelector(el)
    console.log(this.el);
  }

  isElementNode(node) {
    return node.nodeType === 1;
  }
}

class MVue {

  constructor(options) {
    this.$el = options.el
    this.$data = options.data
  }

  

  // console.log(); 

  // if (this.$el) {
  //   // 实现一个数据观察者
  //   // 实现一个指令解析器
    // new Compile(this.$el, this)
  // }
}
