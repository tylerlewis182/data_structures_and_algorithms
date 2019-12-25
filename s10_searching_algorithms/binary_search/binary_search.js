/*

Binary Search

Write a function called binarySearch which accepts a sorted
array and a value and returns the index at which the value
exists.  Otherwise, return -1.

*/

function binarySearch(arr, val)
{
  let l = 0;
  let r = arr.length - 1;
  let m = null;

  // check if val is in range of arr or at either end of the array
  if(val < arr[l] || val > arr[r])
  {
    return -1;
  }
  else if(arr[l] === val)
  {
    return l;
  }
  else if(arr[r] === val)
  {
    return r;
  }


  while((r-l) > 1)
  {
    // get new middle position 'i'
    i = Math.floor((l + r) / 2);

    if(arr[i] > val)
    {
      r = i;
    }
    else if(arr[i] < val)
    {
      l = i;
    }
    else if(arr[i] === val)
    {
      return i;
    }
  }
  return -1;
}



// test cases
let test_cases =
[
  [[1,2,3], 2], // 1
  [[1,2,3,4], 2], // 1
  [[1,2,3,4], 3], // 2
  [[1,2,3,4,5,7,8,9], 6], // -1
  [[1,2,3,4,5], 2], // 1
  [[1,2,3,4,5], 3], // 2
  [[1,2,3,4,5], 5], // 4
  [[1,2,3,4,5], 6], // -1
  [[5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10], // 2
  [[5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95], // 16
  [[5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100], // -1
];

for(let test_case of test_cases)
{
  console.log(binarySearch(test_case[0], test_case[1]));
}
