// //check anagram

const Anagram = (str1, str2) => {
  if (str1.length != str2.length) {
    console.log(" string length is not equal");
    return false;
  }
  let counter = {};
  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  console.log(counter);
  for (let items of str2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  console.log(`The given string ${str1} : ${str2} is Anagram`);
  return true;
};
const result = Anagram("dinanath", "htananid");
console.log(result);
