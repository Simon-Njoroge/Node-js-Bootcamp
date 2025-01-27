const fs=require('fs');

const text=fs.readFileSync('./input.txt','utf-8');
console.log(text);

const textout = `this is what yo know about hello word: ${text}`
fs.writeFileSync('./output.txt',textout);
