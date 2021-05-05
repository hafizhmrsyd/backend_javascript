//TO DO 1
const { EventEmitter } = require('events');

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}

//TO DO 2
const myEmitter = new EventEmitter();

//TO DO 3
myEmitter.on('birthday', birthdayEventListener);

//TO DO 4
myEmitter.emit('birthday', 'Aleric');