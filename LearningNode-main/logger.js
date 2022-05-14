const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {id: uuid.v4(), msg}); //show new id with the msg
    }
}

module.exports = Logger;