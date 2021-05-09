function alphabet() {
  let alphabet = [];
  for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCodePoint(i));
  };
  return alphabet;
}

module.exports.alphabet = alphabet;

function alphabetFromChar(char) {
  let AZ = alphabet();
  let index = AZ.indexOf(char);
  let tail = AZ.splice(index, 26 - index + 1);
  return tail.concat(AZ);
}

module.exports.alphabetFromChar = alphabetFromChar;