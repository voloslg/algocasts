// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



let str = 'abba';

function palindrome(str) {
  let result = str.split('').reduce((rev, char) => char + rev, '');
  return (result === str) ? true : false;
}



// function palindrome(str) {
//   let result = Array.from(str).reduce((rev, char) => char + rev, '');
//   return (result === str) ? true : false;
// }

// function palindrome(str) {
//  return str.split('').every((char, i) => {
//    return char === str[str.length - i - 1];
//  });

// }

// palindrome('abba');
// palindrome('abcdefg');


module.exports = palindrome;
