async function fun0(){
    console.log("1");
    return new Promise((resolove,reject)=>{
        resolove('test promise');
        reject("error reject");
    });
}

// fun0().then((resolve)=>{
//     console.log(resolve);
// }).catch(res=>{
//     console.log(res)
// })



function log(time) {
    return new Promise((resolve, reject)=> {
        setTimeout(function(){
           console.log(time)
           resolve()
        }, time)
    })
}
 
async function fun() {
    await log(5000)
    await log(10000)
    log(1000)
    console.log(1)
}

fun()
