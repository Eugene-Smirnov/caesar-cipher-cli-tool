const { program } = require('commander');

program
  .requiredOption('-s, --shift <integer>', 'set encoding or decoding shift')
  .option('-i, --input <path>', 'way to input.txt')
  .option('-o, --output <path>', 'way to output.txt')
  .requiredOption('-a, --action <action>', 'encode or decode');

program.parse(process.argv);
const { shift, input, output, action } = program.opts();

module.exports = { shift, input, output, action };
