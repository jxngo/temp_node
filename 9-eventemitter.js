const EventEmitter = require('events')

// on - listen for an event
// emit - emit an event
const customEmiter = new EventEmitter()


customEmiter.on('response', (name,id)=> {
    console.log(`data received - user:${name} with id: ${id}`)
})

customEmiter.on('response', ()=> {
    console.log(`some other logic here`)
})

customEmiter.emit('response','john',34)