// function testable(target) {
//     console.log('target', target);
//     target.isTestable = true;
//   }
  
//   @testable
//   class MyTestableClass {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     printInfo() {
//       console.log(this.name)
//     }
//   }
  
//   let test = new MyTestableClass('王五', 20);
//   console.log(MyTestableClass.isTestable)
//   test.printInfo();
  
//   /**
//    * 上面代码等价于 MyTestableClass = testable(MyTestableClass)
//    */
//   console.log('-----传递参数的装饰器-------');
  
//   function decorator1(isTestable) {
//     return function(target) {
//       target.isTestable = isTestable;
//     }
//   }
  
//   @decorator1(true)
//   class MyTestableClass1 {}
//   console.log(MyTestableClass1.isTestable)


