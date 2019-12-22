/*

Sliding Window - Min Sub Array Length

Write a function called minSubArrayLen which accepts two
parameters: an array of positive integers and a positive
integer.

This function should return the minimal length of a contiguous
subarray of which the sum is greater than or equal to the
integer passed to the function.  If there isn't one, return
zero instead.

Constraints:
  Time  - O(n)
  Space - O(1)

*/

function minSubArrayLen(arr, sum)
{
  // check minimum length of array

  // sliding window search
  let total = 0;
  let start = 0;
  let end = 0;
  let min_len = Infinity;

  while(start < arr.length)
  {
    if(total < sum && end < arr.length)
    {
      total += arr[end];
      end++;
    }
    else if(total >= sum)
    {
      min_len = Math.min(min_len, end-start);
      total -= arr[start];
      start++;
    }
    else
    {
      break;
    }
  }
  return min_len === Infinity ? 0 : min_len;
}



// test cases
const test_cases =
[
  [[2,3,1,2,4,3], 7], // 2 -> because [4,3] is the smallest contiguous subarray whos sum is >= 7
  [[2,1,6,5,4], 9], // 2
  [[3,1,7,11,2,9,8,21,62,33,19], 52], // 1
  [[1,4,16,22,5,7,8,9,10], 39], // 3
  [[1,4,16,22,5,7,8,9,10], 55], // 5
  [[4,3,3,8,1,2,3], 11], // 2
  [[1,4,16,22,5,7,8,9,10], 95], // 0
];

for(let test_case of test_cases)
{
  console.log(minSubArrayLen(test_case[0], test_case[1]));
}


