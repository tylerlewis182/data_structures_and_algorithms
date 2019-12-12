/*

Frequency Counter/ Multiple Pointers - Are There Duplicates

Implement a function called areThereDuplicates which accepts a
variable number of arguments and checks whether there are any
duplicates among the arguments passed in.  You can solve this
using the frequency counter pattern OR the multiple pointers
pattern.

Restrictions:
  Time - O(n)
  Space - O(n)

Bonus:
  Time - O(nlog(n))
  Space - O(1)

*/

function areThereDuplicates(arr) // O(nlog(n))
{
  // make sure array has at least 2 items
  if(arr.length < 3)
  {
    if(arr.length == 2 && arr[0] === arr[1])
    {
      return true;
    }
    return false;
  }

  // sort arr in ascending order
  arr.sort(); // O(n * log(n)) for arrays containing more than 10 items (quicksort)

  // search for duplicates in the sorted array - O(n)
  let i = 0;
  for(let j=1; j<arr.length; j++)
  {
    if(arr[i] === arr[j])
    {
      return true;
    }
    i++;
  }
  return false;
}



// test cases
const test_cases =
[
  [1, 2, 3], // false
  [1, 2, 2], // true
  ['a', 'b', 'c', 'a'], // true
];

for(let test_case of test_cases)
{
  console.log(areThereDuplicates(test_case));
}
