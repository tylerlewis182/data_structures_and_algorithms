/*

Sliding Window - Max Subarray Sum

Given an array of integers and a number, write a function called
maxSubarraySum which finds the maximum sum of a subarray with
the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from
the original array.  In the first example below, [100, 200, 300]
is a subarray of the original array, but [100, 300] is not.

Constraints:
  Time  - O(n)
  Space - O(1)
*/

function maxSubarraySum(arr, n)
{
  // make sure there are at least 'n' elements in arr
  if(arr.length < n || arr.length === 0)
  {
    return null;
  }

  let max_sum = 0;
  // set initial window value sum
  for(let i=0; i<n; i++)
  {
    max_sum += arr[i];
  }


  // sliding window sum
  let sum = max_sum;
  for(let i=0; i<(arr.length-n); i++)
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
  [[100], 1], // 100
  [[100,200,300,400], 2], // 700
  [[1,4,2,10,23,3,1,0,20], 4], // 39
  [[-3,4,0,-2,6,-1], 2], // 5
  [[3,-2,7,-4,1,-1,4,-2,1], 2], // 5
  [[2,3], 3], // null

];

for(let test_case of test_cases)
{
  console.log(maxSubarraySum(test_case[0], test_case[1]));
}
