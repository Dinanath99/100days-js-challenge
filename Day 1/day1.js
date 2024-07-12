/*
Q.1 Longest word in a string
write a function findLogestword that takes a string as input and return the longest word in the string .if there are multiple longest words,return the first one encountered.


*** the input string may contain alphabetic characters digits, space and puntuation
*** the input string is non-empty
*** the input string may contain multiple words separated by spaces

//Note 
*** if the input string is empty or contains only whitespace, the function should return an false
*** the function should ignore leading and trailing whitespace when determining the longest word


*/

//solution

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  words = str.split(" ");
  newsortword = words.sort((a, b) => a.length - b.length);
  return newsortword.reduce((accum, currword) =>
    currword.length > accum.length ? currword : accum
  );
};

console.log(findLongestWord("Html is not a programming language"));
