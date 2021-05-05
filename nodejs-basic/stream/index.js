const fs = require('fs');
const path = require('path');

// const writeableStream = fs.createWriteStream('output.txt');
const readableStream = fs.createReadStream('./stream/input.txt', {

    highWaterMark: 15

});

const writeableStream = fs.createWriteStream('./stream/output.txt');

// readableStream.on('readable', () => {
//     try {
//         let msg = process.stdout.write(`${readableStream.read()}\n`);  #process.stdout.write membuat output sebatas di terminal, menghasilkan null di output.txt
//jika dihapus, baru bisa outputnya ke output.txt
//         writeableStream.write(msg);
//         console.log(msg);


//     } catch(error) {
//         // catch the error when the chunk cannot be read.
//     }
// });

readableStream.on('readable', () => {
  try {
      let msg = `${readableStream.read()}\n`;
      writeableStream.write(msg);
      console.log(msg);


  } catch(error) {
      // catch the error when the chunk cannot be read.
  }
});

readableStream.on('end', () => {
    console.log('Done');
});