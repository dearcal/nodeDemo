console.log('本章节介绍类');

class Person {
  constructor() {
    this.name = '张三';
  }

  hello() {
    console.log(`你好:${this.name}`)
  }
}


class Xiaoming extends Person {
  say() {
    console.log(this.name)
    console.log('哈哈')
  }
}

let x = new Xiaoming()
x.say()