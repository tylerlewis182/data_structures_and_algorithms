/*

Multiple Pointers - Average Pair

Write a function called averagePair.  Given a sorted
array of integers and a target average, determine
if there is a pair of values in the array where the
average of the pair equals the target average.  There
may be more than one pair that matches the average
target.

Bonus Constraints:
  Time: O(n)
  Space: O(1)

*/

function average(num1, num2)
{
  return (num1 + num2)/2;
}

function averagePair(arr)
{
  const target = arr.pop();
  arr = arr[0];

  // make sure there are at least 2 items in arr
  if(arr.length < 2)
  {
    if(arr.length === 1)
    {
      if(arr[0] === target)
      {
        return true;
      }
    }
    return false;
  }

  // search for pairs who's average matches target
  let i = 0;
  let j = arr.length - 1;
  while(i < j)
  {
    let avg = average(arr[i], arr[j]);
    if(avg === target)
    {
      return true;
    }
    else if(avg < target)
    {
      i++;
    }
    else
    {
      j--;
    }
  }
  return false;
}



// test cases
const test_cases =
[
  [ [1, 2, 3], 2.5 ], // true
  [ [1, 3, 3, 5, 6, 7, 10, 12, 19], 8 ], // true
  [ [-1, 0, 3, 4, 5, 6], 4.1 ], // false
  [ [], 4 ], // false
];

for(let test_case of test_cases)
{
  console.log(averagePair(test_case));
}
