/*

Sliding Window Pattern

Write a function called maxSubarraySum which accepts
an array of integers and a number called 'n'.  The function
should calculate the maximum sum of 'n' consecutive
elements in the array.

*/

function maxSubarraySum(arr, n)
{
  if(arr.length < n)
  {
    return null;
  }

  let max_sum = -Infinity;
  let sub_arr = arr.slice(0, n);
  let sum = 0;
  for(let num of sub_arr)
  {
    sum += num;
  }
  max_sum = Math.max(max_sum, sum);

  for(let i=0; i<arr.length-n; i++)
  {
    sum -= arr[i];
    sum += arr[i+n];
    max_sum = Math.max(max_sum, sum);
  }
  return max_sum;
}



// test cases
const test_cases =
[
  [[1,2,5,2,8,1,5], 2], // 10
  [[1,2,5,2,8,1,5], 4], // 17
  [[4,2,1,6], 1], // 6
  [[4,2,1,6,2], 4], // 13
  [[], 4], // null
];

for(let test_case of test_cases)
{
  console.log(maxSubarraySum(test_case[0], test_case[1]));
}
