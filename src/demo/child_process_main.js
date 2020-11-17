const {fork} = require('child_process');
const worker = fork(__dirname + '/child_process_worker.js')
let numCPUs = require('os').cpus.length;

let max = 1e7
let min = 2
let start = 2
let primes = []

const range = Math.ceil((max - min) / numCPUs)

for (let i =0;i < numCPUs; i++) {
    worker.send({start: start, range:range});
    start = start+ range;
    worker.on('message', message =>{
        primes = primes.concat(msg.data);
        worker.kill();
    })
}