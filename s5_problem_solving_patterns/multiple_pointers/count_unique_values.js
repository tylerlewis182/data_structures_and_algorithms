/*

Multiple Pointers

Implement a function called countUniqueValues
which accepts a sorted array and counts the
unique values in the array.  There can be negative
numbers in the array, but it will always be sorted.

*/

function countUniqueValues(arr)
{
  if(arr.length === 0)
  {
    return 0;
  }
  else if(arr.length === 1)
  {
    return 1;
  }

  let count = 1;
  let ptr1 = 0;

  for(let i=1; i<arr.length; ++i)
  {
    if(arr[i] !== arr[ptr1])
    {
      count += 1;
      ptr1 = i;
    }
  }
  return count;
}



// test cases
const test_cases =
[
  [1,1,1,1,1,2], // 2
  [1,2,3,4,4,4,7,7,12,12,13], // 7
  [], // 0
  [-2,-1,-1,0,1], // 4
];

for(let test_case of test_cases)
{
  console.log(countUniqueValues(test_case));
}
