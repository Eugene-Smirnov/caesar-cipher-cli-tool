/* CAESAR-CIPHER-CLI-TOOL */
// Requiers
const { program } = require('commander');
program.version('0.0.1');
const fs = require('fs');
const { Readable, Writable, Transform } = require('stream');
// CLI input
program
  .requiredOption('-s, --shift <Integer>', 'Set shift for encoding or decoding')
  .option('-i, --input', 'Way to input.txt')
  .option('-o, --output', 'Way to output.txt')
  .requiredOption('-a, --action', 'Encode or decode');

program.parse(process.argv);

const options = program.opts();
// Read
class InputReader extends Readable {
  constructor(opt) {
    super(opt);

    
  }
}
  