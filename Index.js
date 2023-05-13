const fs = require('fs');
const http = require('http');
const url = require('url')

const json = fs.readFileSync(`${__dirname}/Data.json`, `utf-8`)
// console.log(json)
const LaptopData = JSON.parse(json)
console.log(LaptopData)

const server = http.createServer((req, res)=>{
    const pathName = url.parse(req.url, true).pathname
    const query = url.parse(req.url, true).query
    console.log(url.parse(req.url, true))
    var id = query.id
//   console.log("someone did access the server!")
if(pathName === '/products' || pathName === '/'){
res.writeHead(200, {'content-type': 'text/html'})
    res.end('this is the Products page!')
}

else if (pathName === '/laptop' && id < LaptopData.length){
    
res.writeHead(200, {'content-type': 'text/html'})
    res.end(`this is the laptop page for laptop ${id}`)
}
else if (pathName === '/api') {
    res.writeHead(200, {'content-type': 'application/json'})
    res.end(json)
}
 else {
res.writeHead(404, {
    'content-type': 'text/html',
     'my-header': 'head'
})
res.end('Page not found!')
 }

})

fs.writeFile('./txt/my-file.txt', 'page hsas been created', 'utf-8', err =>{
    console.log('successful')
})

server.listen(1337, '127.0.0.1', ()=>{
    console.log('listening for requests')
})