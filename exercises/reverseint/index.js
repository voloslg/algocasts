// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

let n = 5;
function reverseInt(n) {
  let str = Number.toString(n);
  console.log(str);
  let result = Array.from(str).reduce((rev, char) => char + rev, "");
  console.log(result);
  return result === str;
}

reverseInt(981);

module.exports = reverseInt;
