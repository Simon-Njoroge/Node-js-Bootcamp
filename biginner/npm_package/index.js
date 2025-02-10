const slugify=require('slugify');
const http=require('http');
const url= require('url');
const fs=require('fs');
const server=http.createServer((req,res)=>{
 fs.readFile('./data.json','utf-8',(err,data)=>{
    const product=JSON.parse(data);
    res.end(data)
 })
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server is running on port 8000')
})