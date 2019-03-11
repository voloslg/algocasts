// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

let str = "Andrew";

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
// console.log(reverse(str));

// function reverse(str) {
//   let rev = "";
//   for (let i in str) {
//     rev = str[i] + rev;
//   }
//   return rev;
// }

function reverse(str) {
  let rev = "";
  for (let item of str) {
    rev = item + rev;
  }
  return rev;
}

// function reverse(str) {
//   let rev = " ";
//   for (const item of str) {
//     rev = item + rev;
//   }
//   return rev;
// }

// let str = "Mark";
// function reverse(str) {
//   return Array.from(str).reduce((rev, char) => char + rev, "");
// }

console.log(reverse(str));

module.exports = reverse;
