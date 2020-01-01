/*

Merge Sort

Recursively break the array down into sub-array halves until each
sub-array has 1 or 0 elements.  Merge the sub-arrays back
together in order.  Return the sorted array.

*/
const merge = require('./merge');

function mergeSort(unsorted_arr)
{
  let arr = [...unsorted_arr];

  // base case
  if(arr.length <= 1)
  {
    return arr;
  }

  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}



// when a file is run directly from Node, require.main is set to its module. (does not work in browser!)
if(typeof(require) !== 'undefined' && require.main === module) // if run in browser, typeof(require) === 'undefined'
{
  runTests();
}

function runTests()
{
  // test cases
  let test_cases =
  [
    [3,2,1,5,4], // [1,2,3,4,5]
    [2,3,1,4], // [1,2,3,4]
    [2,5,1,6], // [1,2,5,6]
    [9,5,4,6,1,2,8,7,3], // [1,2,3,4,5,6,7,8,9]
  ];

  for(let test_case of test_cases)
  {
    console.log(mergeSort(test_case));
  }
}
