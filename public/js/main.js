const http = require('http')

const url = require('url')

const fs = require('fs')

const port = 2023

const server = http.createServer((req,res)=>{
    // set the general header response
    res.setHeader('content-type','text/html')

    const reqURL = url.parse(req.url).pathname
    console.log(req.method)

    let data = '';

    switch(reqURL){
        case '/':
            data = fs.readFileSync(__dirname+'/../../index.html',{encoding:'utf-8'})
            break;
        case '/about':
            data = fs.readFileSync(__dirname+'/../../about.html',{encoding:'utf-8'})
            break;
        case '/contact':
            data = fs.readFileSync(__dirname+'/../../contact.html',{encoding:'utf-8'})
            break;
        case '/service':
            data = fs.readFileSync(__dirname+'/../../service.html',{encoding:'utf-8'})
            break;
        default:
            data = fs.readFileSync(__dirname+'/../../error.html',{encoding:'utf-8'})
            
    }

    res.write(data)
    res.end()

})
server.listen(port,()=>{
    console.log(`Server started on http://127.0.0.1:${port}`)
});