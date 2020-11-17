console.time('cluster');
const min = 2
const max = 1e7
function generatePrimes(start, range) {
  let primes = []
  let isPrime = true
  let end = start + range
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i%j === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      primes.push(i)
    }
    isPrime = true
  }
  return primes
}


var cluster = require('cluster')
var numCPUs = require('os').cpus().length


let primes = [];

if (cluster.isMaster) {
    console.time('master');

    const range = Math.ceil((max - min) / numCPUs);
    let start = min;

    for (let i = 0; i < numCPUs; i++) {
        const work = cluster.fork();
        work.send({start: start, range:range});
        start = start + range;

        work.on('message', (msg)=>{
            primes = primes.concat(msg.data);
            work.kill();
        })
    }

    cluster.on('exit',function(worker,code,signal) {
        // console.log("worker "+ worker.process.pid+ ' died');

    })
    console.timeEnd('master');
}else{
    process.on('message',function(msg){
        console.log(msg);
        const {start,range} = msg;
        const data = generatePrimes(start,range);
        process.send({data:data});

    })
}

console.timeEnd('cluster');