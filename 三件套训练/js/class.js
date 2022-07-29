class Clock {
  constructor(template) {
    this.template = template
  }

  render() {
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    if(hour<10) hour = "0" + hour
    if(min<10) min = "0" + min
    if(sec<10) sec = "0" + sec

    let outTime = this.template.replace('HH', hour).replace('mm', min).replace("ss", sec)
    console.log(outTime);
  }

  star() {
    this.render()
    this.time = setInterval(() => this.render(), 1000)
  }

  stop() {
    clearInterval(this.star)
  }
}

// 时钟运行
// let clock = new Clock('HH:mm:ss')
// clock.star()
