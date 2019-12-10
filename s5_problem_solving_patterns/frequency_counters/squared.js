/*

Write a function called squared, which accepts two arrays.
The function should return true if every value in the
array has it's corresponding value squared in the second
array.  The frequency of values must be the same.

*/

function squared(arr1, arr2)
{
  // make sure both arrays are the same length
  if(arr1.length !== arr2.length)
  {
    return false;
  }


  return true;
}



arr1 = [1,2,3];
arr2 = [1,4,9];
console.log(squared(arr1, arr2));


// arr1 = [1,2,3];
// arr2 = [1,4,10];
// console.log(squared(arr1, arr2));
