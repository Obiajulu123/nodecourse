import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

function greetHandler(name){
    console.log('Hello world' + name)
}
function goodbyeHandler(name){
    console.log('Goodbye to you' + name)
}

myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbyeHandler)

myEmitter.emit('greet', ' John')
myEmitter.emit('goodbye', 'Stupid')