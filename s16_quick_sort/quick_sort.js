/*

Quick Sort

Implement quick sort algorithm.

Example:

  [3, 2, 1, 5, 4]
  [2, 3, 1, 5, 4]
  [1, 2, 3, 5, 4]
  [1, 2, 3, 5, 4]


*/

function quickSort(unsorted_arr)
{
  let arr = [...unsorted_arr];

  // pick the pivot value (just use first element in the array for now...)
  let pivot_index = 0;
  let pivot_value = arr[pivot_index];

  for(let i=1; i<arr.length; i++)
  {
    if(arr[i] < pivot_value)
    {
      // move the smaller element to the i-1 index


    }
  }


  return arr;
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
    console.log(quickSort(test_case));
  }
}
