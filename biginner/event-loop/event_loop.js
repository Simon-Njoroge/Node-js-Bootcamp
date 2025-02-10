const fs=require('fs')
const  crypto = require('crypto')
setTimeout(()=>{
    console.log('timer 1 finished')
},3000)
setImmediate(()=>{
    console.log('immediate 1 finished')
})

fs.readFile('./me.txt','utf-8',()=>{
    console.log('I/O finished')
})

crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
    console.log('password encrypted')
})
console.log("hello from the top-level code")