const fs = require('fs');
const { input } = require('./input-parse');

let readStream;
if (input) {
  readStream = fs.createReadStream(input);
} else {
  console.log('Input message from keyboard. `Use ctrl + c` to veave');
  readStream = process.stdin;
}

module.exports = readStream;