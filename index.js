/* CAESAR-CIPHER-CLI-TOOL */
// Requiers
const { program } = require('commander');
program.version('0.0.1');
const fs = require('fs');
const { Readable, Writable, Transform } = require('stream');
const alphabetFromChar = require('./alpabetFromChar');

// CLI input
program
  .requiredOption('-s, --shift <Integer>', 'Set shift for encoding or decoding')
  .option('-i, --input', 'Way to input.txt')
  .option('-o, --output', 'Way to output.txt')
  .requiredOption('-a, --action', 'Encode or decode');

program.parse(process.argv);
const options = program.opts();

// Read
const textReader = fs.createReadStream(options.input, 'utf8');

// Transform
// class textTransform extends Transform {
//   _transform(chunk, encoding, callback) {
//     try {
//       const decodingAlpabet = 
//       const inputArray = chunk.toString('utf8').split('');


//       callback(null, resultString);
//     } catch (err) {
//       callback(err);
//     }
//   }
// }

// Write
const textWriter = fs.createWriteStream(options.output, 'utf8');

textReader.pipe(textWriter);
  