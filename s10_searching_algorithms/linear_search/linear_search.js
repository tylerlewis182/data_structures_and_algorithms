/*

Linear Search

Write a function that accepts an array and a value.
Loop through the array and check if the current array
element is equal to the value.  If it is, return the
index at which the element is found.  If the value is
not found, return -1.

*/

function linearSearch(arr, val)
{
  for(let i=0; i<arr.length; ++i)
  {
    if(arr[i] === val)
    {
      return i;
    }
  }
  return -1;
}


// test cases
let test_cases =
[
  [[1,2,3,4,5], 3], // 2
  [['dog', 'cat', 'pig'], 'cat'], // 1
  [[1,2,3,4,5], 6], // -1
];

for(let test_case of test_cases)
{
  console.log(linearSearch(test_case[0], test_case[1]));
}


/*
NOTE: javascript methods that use linear search include:

  indexOf
  includes
  find
  findIndex
*/
