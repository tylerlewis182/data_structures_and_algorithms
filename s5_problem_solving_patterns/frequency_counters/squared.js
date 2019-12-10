/*

Frequency Counters

Write a function called squared, which accepts two arrays.
The function should return true if every value in the
array has it's corresponding value squared in the second
array.  The frequency of values must be the same.

*/

function squared(arr1, arr2) // time complexity: O(n)
{
  // make sure both arrays are the same length
  if(arr1.length !== arr2.length)
  {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for(let val of arr1)
  {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2)
  {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for(let key in frequencyCounter1)
  {
    if(!(key ** 2 in frequencyCounter2))
    {
      return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key])
    {
      return false;
    }
  }
  console.log(frequencyCounter1); // { '1': 1, '2': 1, '3': 1 }
  console.log(frequencyCounter2); // { '1': 1, '4': 1, '9': 1 }
  return true;
}



arr1 = [1,2,3];
arr2 = [1,4,9];
console.log(squared(arr1, arr2)); // true


// arr1 = [1,2,3];
// arr2 = [1,4,10];
// console.log(squared(arr1, arr2));
