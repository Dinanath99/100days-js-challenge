/*

Write a function countVowels that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string. The function should ignore case sensitivity, meaning both uppercase and lowercase vowels should be counted.

*/

function countVowel(str) {
  let count = 0;
  let newstr = str.split(" ");
  for (let char of newstr) {
    console.log(char);
  }
}
console.log(countVowel("a, e, i, o, u"));
