const Eventemitter = require('events')
const http = require('http')



class Register extends Eventemitter {
    constructor(){
        super();
    }
}

const MyEmitter = new Register



MyEmitter.on('signup', ()=>{
    console.log('ade has registered')
})

MyEmitter.on('signup', people=> {
    console.log(`the number of reistered users is ${people}.`)
})

MyEmitter.on('signup', ()=> {
    console.log('ade is not a robot')
})

MyEmitter.emit('signup', 10)




////////////////////////////////////////////////////////

const server = http.createServer()

server.on('request', (req, res)=> {
    console.log('A request has been recieved')
    res.end('A request has been recieved')
})

server.on('request', (req, res)=> {
    console.log('Another request has been recieved')
})

server.listen(5000, '127.0.0.1', ()=>{
    console.log('listening...')
})