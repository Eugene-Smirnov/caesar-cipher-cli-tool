const { shift, input, output, action } = require('./input-parse');
const fs = require('fs');
if (isNaN(shift)) {
  process.stderr.write(`Error! Shift must be a number`);
  process.exit(1);
};
if (input) {
  if (!fs.existsSync(input)) {
    process.stderr.write('Error! Wrong input value');
    process.exit(2);
  };
};
if (output) {
  if (!fs.existsSync(output)) {
    process.stderr.write('Error! Wrong output value');
    process.exit(3);
  };
};
if (action !== 'encode' && action !== 'decode') {
  process.stderr.write(`Error! Action should be string with 'encode' or 'decode' value`);
  process.exit(4);
};
