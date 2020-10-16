
var readline = require('readline');
const dns = require('dns')
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.on('line', function (line) {
//   if (line == 'exit' || line == 'quit' || line == 'q')
//     rl.close();
//   else
//     console.log('您输入了: ' + line);
// });

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


// const dominName = 'www.baidu.com'
// dns.resolve(dominName, (err, address) => {
//   console.log(address)
// })
// dns.lookup(dominName, (err, address) => {
//   console.log(address)
//   dns.reverse(address, (err, domains) => {
//     console.log('domains '+ domains)
//   })
// })


const os = require('os');
console.log(os.cpus())