let str = "abcccddddddde";

let obj = {};
let max = 0;
let maxChar = "";

for (let char of str) {
  if (obj[char]) {
    obj[char]++;
  } else {
    obj[char] = 1;
  }
}

for (const key in obj) {
  if (obj[key] > max) {
    max = obj[key];
    maxChar = key;
  }
}

console.log(obj);

delete obj.a;
console.log(obj);
console.log(maxChar);
