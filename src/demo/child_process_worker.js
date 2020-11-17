// 素数的计算
function generatePrimes(start, range) {
    let primes = []
    let isPrime = true
    let end = start + range
    for (let i = start; i < end; i++) {
        for (let j = 2; j < Math.sqrt(end); j++) {
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

process.on('message',(msg) => {
    const {start, range} = msg;
    console.log(msg)
    const data = generatePrimes(start, range);
    process.send({data: data})
})

process.on('SIGHUP',function(){
    process.exit();
})