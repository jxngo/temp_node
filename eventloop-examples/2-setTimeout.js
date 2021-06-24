// started operating system process
console.log('first')
// setTimeout is asynchronous, it gets offloaded back to the line
// only when we're done with immediate code we invoke callback
setTimeout(() => {
    console.log('second')
}, 0)
console.log('third')
// completed and exited os process