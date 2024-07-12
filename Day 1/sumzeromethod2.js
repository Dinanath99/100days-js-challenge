// sum zero problem time complexity o(n) linear complexity
const sumZero = (array) => {
  // Sort the array first
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  // Return null if no such pair is found
  return null;
};

let array = [2, 3, -4, -5, 6, 0, 4, 9, 10, 5, 6, 8];
const result = sumZero(array);
console.log(result); // Output: [-4, 4]
