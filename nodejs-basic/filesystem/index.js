// TODO: tampilkan teks pada notes.txt pada console.
// const fs = require('fs');

// const fileReadCallback = (error, data) => {
//     if(error) {
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// };

// fs.readFile('notes.txt', 'UTF-8', fileReadCallback);

//di-recall dengan catatan notes.txt di folder backend (utama)



//OPSI 2
const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (error, data) => {
  if(error) {
    console.log('Gagal membaca berkas');
    return;
  }
  console.log(data);
};

fs.readFile(resolve(__dirname, 'notes2.txt'), 'UTF-8', fileReadCallback);