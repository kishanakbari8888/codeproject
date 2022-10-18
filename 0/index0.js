const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/about')
    {
        res.end("<h1> kishan <h1>");
    }
    else if(req.url=='/'){
        res.end('hello kishan akbari');
    }
    else
    {
        console.log("kishan");
        res.end("error");
    }
    
});



server.listen(2000);