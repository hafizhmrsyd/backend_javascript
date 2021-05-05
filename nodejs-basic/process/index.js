const initialMemoryUsage = process.memoryUsage().heapUsed
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = process.memoryUsage().heapUsed;
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// SET NODE_ENV=development && node ./<namafile.tipefile> <Nama Anda>  ---> for execution on cmd
// to write codes more than one line on cmd while using node.js, please refer it to node --> .editor on the cmd
//.exit untuk keluar dari terminal node