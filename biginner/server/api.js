const http =require('http');
const url=require('url')
const fs=require('fs');
const { json } = require('stream/consumers');

const server = http.createServer((req,res)=>{
    pathname=req.url
    fs.readFile('./data.json','utf-8',(err,data)=>{
        const productData=JSON.parse(data);
        console.log(productData);
        res.writeHead(200,{
            'Content-type':'application/json'
        });
        res.end(data);
    })
   
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server is running on port 8000')
})