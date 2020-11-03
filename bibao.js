// function wait(message){
//     setTimeout(function timer(){
//         console.log(message);
//     },1000);
// }
// wait("Hello, closure!");

for (var i=1; i<=5; i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        },j*1000);
    })(i)
}