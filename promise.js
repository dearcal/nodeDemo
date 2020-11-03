
const PENDING = 'PENDING'
const FULLFILLED = 'FULLFILLED'
const REJECTED = 'REJECTED'


class Promise{
    constructor(exector){

        this.status = PENDING;

        this.value = undefined;
        this.reason = undefined;


        this.onFullfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = value => {
            if (this.status === PENDING) {
                this.value = value;
                this.status = FULLFILLED;
                this.onFullfilledCallbacks.forEach(fn => fn(this.value))
            }
        }
        const reject = reason => {
            if (this.status === PENDING) {
                this.reason = reason;
                this.status = REJECTED;
                this.onRejectedCallbacks.forEach(fn => fn(this.reason))
            }
        }
        try {
            exector(resolve,reject); 
        } catch (error) {
            reject(error)
        }
    }
    then(onFullfilled,onRejected){

        onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason =>{
            throw new Error ? reason.message : reason
        }

        const self = this;
        return new Promise((resolve,reject)=>{
            if (self.status === FULLFILLED) {
                setTimeout(()=>{
                    try {
                        const result = onFullfilled(self.value);
                        result instanceof Promise ? result.then(resolve,reject) : resolve(result);
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (self.status === REJECTED){
                onRejected(this.reason)
                setTimeout(()=>{
                    try {
                        const result = onRejected(self.reason);
                        result instanceof Promise ? result.then(resolve,reject) : reject(result);
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (self.status === PENDING){
                self.onFullfilledCallbacks.push(()=>{
                    try {
                        setTimeout(()=>{
                           const result = onFullfilled(this.value);
                           result instanceof Promise? result.then(resolve,reject) : resolve(result);
                        })
                    } catch (error) {
                        reject(error)
                    }
                });
                self.onRejectedCallbacks.push(()=>{
                    try {
                        setTimeout(()=>{
                            const result = onRejected(this.reason);
                            result instanceof Promise? result.then(resolve,reject) : reject(result);
                        })
                    } catch (error) {
                        reject(error)
                    }
                });
            }
        })
    }
    catch(onRejected){
        return this.then(null,onRejected);
    }
    static resolve(value){
        if (value instanceof Promise) {
            return value;
        } else {
            return new Promise((resolve,reject)=> resolve(value));
        }
    }
    static reject(reason){
        return new Promise((resolve,reject)=>reject(reason));
    }
    static all(){

    }
    static race(){

    }
}

//test function1
/*
const p1 = new Promise((resolve,reject)=>{
    let num = Math.random()
    console.log(num)
    if (num < 0.5) {
        resolve('resolve!!!');
    } else {
        reject('rejected!!!');
    }
}).then(
    function reso(res){
        console.log(res)
    },
    function rejt(res) {
        console.log(res)
    }
)
*/

//test function2
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000)
}).then(
    res => console.log(res)
)