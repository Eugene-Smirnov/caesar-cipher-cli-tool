const { Transform } = require('stream')
const { alphabet, alphabetFromChar } = require('./array-alphabet-creator');
const { shift, action } = require('./input-parse');

class CaesarEncodingTransform extends Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = +shift;
    this.alphabet = alphabet();
    this.alphabetLowerCase = [];
    for (let letter of this.alphabet) {
      this.alphabetLowerCase.push(letter.toLowerCase());
    };
    let index = 65 + this.shift;
    if (index < 65) {
      for (index; index < 65; index += 26) {};
    };
    if (index > 90) {
      for (index; index > 90; index -= 26) {};
    };
    this.shiftAlphabet = alphabetFromChar(String.fromCodePoint(index));
    this.shiftAlphabetLowerCase = [];
    for (let letter of this.shiftAlphabet) {
      this.shiftAlphabetLowerCase.push(letter.toLowerCase());
    }
  }

  _transform(chunk, encoding, callback) {
    try {
      const string = chunk.toString('utf8').split('');
      let result = [];
      if (this.action === 'encode') {
        for (let letter of string) {
          result.push(this._encode(letter));
        };
      } else if (this.action === 'decode') {
        for (let letter of string) {
          result.push(this._decode(letter));
        };
      }
      callback(null, result.join(''));
    } catch (err) {
      callback(err);
    }
  }

  _encode(letter) {
    let result;
    let letterIndex;
    if (/[A-Z]/.test(letter)) {
      letterIndex = this.alphabet.indexOf(letter);
      result = this.shiftAlphabet[letterIndex];
    } else if (/[a-z]/.test(letter)) {
      letterIndex = this.alphabetLowerCase.indexOf(letter);
      result = this.shiftAlphabetLowerCase[letterIndex];
    } else {
      result = letter;
    };

    return result;
  }

  _decode(letter) {
    let result;
    let letterIndex;
    if (/[A-Z]/.test(letter)) {
      letterIndex = this.shiftAlphabet.indexOf(letter);
      result = this.alphabet[letterIndex];
    } else if (/[a-z]/.test(letter)) {
      letterIndex = this.shiftAlphabetLowerCase.indexOf(letter);
      result = this.alphabetLowerCase[letterIndex];
    } else {
      result = letter;
    };

    return result;
  }
}

const transformStream = new CaesarEncodingTransform(action, shift);
module.exports = transformStream;