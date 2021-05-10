const fs = require('fs');
const { output } = require('./input-parse');

let writeStream;
if (output) {
  if (fs.existsSync(output)) {
    writeStream = fs.createWriteStream(output, {flags: 'a+'});
  } else {
    process.stderr.write('Error! Wrong output value');
    process.exit(1)
  }
} else {
  writeStream = process.stdout;
}

module.exports = writeStream;