function class1(){   
    this.name=function(){   
      console.log("我是class1内的方法");   
    }   
  }   
  function class2(){ 
    class1.call(this);  //此行代码执行后，当前的this指向了class1（也可以说class2继承了class1）   
  }   
  
  var f=new class2();   
  f.name();