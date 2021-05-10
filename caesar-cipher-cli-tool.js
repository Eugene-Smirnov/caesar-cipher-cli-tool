/* CAESAR-CIPHER-CLI-TOOL */
const { action } = require('./input-parse');
require('./validation')
const { pipeline } = require('stream');
const readStream = require('./read-stream');
const transformStream = require('./caesar-encoding-transform');
const writeStream = require('./write-stream');

// Reading, transfrom, writing
pipeline(
  readStream,
  transformStream,
  writeStream,
  (err, res) => {
    if (!err) {
      console.log(action.slice(0, -1) + 'ing complete!');
    } else {
      console.log('Error!', err.name, err.message);
    }
  }
);