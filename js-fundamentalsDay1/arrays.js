console.log('----------------- ARRAYS -----------------');

function first(arr) {
  // TODO: write your code here
  return arr[0];
}

console.log(first([1, 2, 3])); // 1
console.log(first(['a', 'b'])); // "a"
console.log(first([])); // undefined

//----------------------------------------------------
console.log('\n');

function last(arr) {
  // TODO: write your code here
  let lastindex = arr.length - 1;
  return arr[lastindex];
}

console.log(last([1, 2, 3])); // 3
console.log(last(['a', 'b'])); // "b"
console.log(last([])); // undefined

//----------------------------------------------------
console.log('\n');

// Use a loop — no array methods yet
function sum(numbers) {
  // TODO: write your code here
  let total = 0;
  for (i = 0; i<numbers.length; i++) {
    total= total + numbers[i];
  }
  return total;
}

console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 20, 30])); // 60
console.log(sum([])); // 0

//----------------------------------------------------
console.log('\n');

// Use a loop — no .includes() yet
function contains(arr, value) {
  // TODO: write your code here
  for (i=0; i<arr.length; i++) {
    if (arr[i]===value) {
      return true;
    }
  }
  return false;
}

console.log(contains([1, 2, 3], 2)); // true
console.log(contains([1, 2, 3], 5)); // false
console.log(contains(['a', 'b'], 'a')); // true

//----------------------------------------------------
console.log('\n');

// Returns a new array without the element at index — do not mutate the original
function removeAt(arr, index) {
  // TODO: write your code here
  let result= []; 

  for (let i=0; i<arr.length; i++) {
      if (i === index) {
        continue;
      }
      result.push(arr[i]);
  }
  
  return result;
}

const nums = [10, 20, 30];
console.log(removeAt(nums, 1)); // [10, 30]
console.log(nums); // [10, 20, 30]  ← unchanged

//----------------------------------------------------
console.log('\n');

// Returns a single flat array from an array of arrays (one level deep)
// Example: [[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]
// Hint: loop through the outer array, then loop through each inner array
function flatten(arrays) {
  // TODO: write your code here
   return arrays.flat(); 

}

console.log(flatten([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
console.log(flatten([['a', 'b'], ['c']]));   // ['a', 'b', 'c']
console.log(flatten([]));                    // []

//----------------------------------------------------
console.log('\n');

// Given TWO arrays, return a new array containing only elements
// that appear in BOTH arrays (no duplicates in the result).
// Hint: loop through one array and check if each element exists in the other.
//       You can reuse the logic from your contains() function above.
function intersection(arrA, arrB) {
  // TODO: write your code here
  const setB = new Set(arrB);
  
  return arrA.filter(item => setB.has(item));
}

console.log(intersection([1, 2, 3], [2, 3, 4]));            // [2, 3]
console.log(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])); // ['b', 'c']
console.log(intersection([1, 2], [3, 4]));                   // []
