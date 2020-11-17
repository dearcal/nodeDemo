function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
    return class extends target {
      newProperty = "new property";
      hello = "override";
    };
  }
  
  @classDecorator
  class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
      this.hello = m;
    }
  }
  console.log(new Greeter("world"));


  