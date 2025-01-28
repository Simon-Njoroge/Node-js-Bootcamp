const http = require('http')
const url=require('url');

// server

const server=http.createServer((req,res)=>{
    const pathname=req.url;

    if (pathname === '/overview'){
        res.end('this is the overview')
    }
    else if(pathname === '/product'){
        res.end('thisis the product')
    }
    else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'hello-word'
        });
        res.end('<h1>page not found<h1/>')
    }
    res.end('hello from the server');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to request on port 8000');
})

