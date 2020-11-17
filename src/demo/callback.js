function first(test){
    setTimeout(function out(){
        console.log("1")
    },2000);
    test();
}

function second(){
  
    console.log("2")
   
}

first(second)
