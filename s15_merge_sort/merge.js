/*

Merge

Merge 2 sorted arrays together in sorted ascending order.
Return the merged array.  This function will be used
by the mergeSort function.
*/

function merge(arr1, arr2)
{
  let arr = [];
  let ptr1 = 0; // arr1 pointer
  let ptr2 = 0; // arr2 pointer

  while(ptr1 < arr1.length && ptr2 < arr2.length)
  {
    if(arr1[ptr1] < arr2[ptr2])
    {
      arr.push(arr1[ptr1]); // console.log(arr);
      ptr1++;
    }
    else
    {
      arr.push(arr2[ptr2]); // console.log(arr);
      ptr2++;
    }
  }
  // add remaining items from either arr1 or arr2 to arr
  while(ptr1 < arr1.length)
  {
    arr.push(arr1[ptr1]);
    ptr1++;
  }
  while(ptr2 < arr2.length)
  {
    arr.push(arr2[ptr2]);
    ptr2++;
  }
  return arr;
}

module.exports = merge;



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
    [[2],[1]], // [1,2]
    [[1,3],[2,4]], // [1,2,3,4]
    [[1,2],[3,4,5]], // [1,2,3,4,5]
    [[1,2,3,5], [4,6,7,8,10]], // [1,2,3,4,5,6,7,8,10]
  ];

  for(let test_case of test_cases)
  {
    console.log(merge(test_case[0], test_case[1]));
  }
}
