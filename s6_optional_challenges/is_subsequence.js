/*

Multiple Pointers - Is Subsequence

Write a function called isSubsequence which takes in two
strings and checks whether the characters in the first
string form a subsequence of the characters in the
second string.  In other words, the function should
check whether the characters in the first string appear
somewhere in the second string, without the order changing.

Your solution must have at least the following complexities:
  Time -  O(n + m) ...where n is the length of first string and m is length of second string
  Space - O(1)

*/

function isSubsequence(s1, s2)
{
  // make sure both strings contain at least 2 characters
  if(s1.length < 2 || s2.length < 2)
  {
    if(s1 === s2)
    {
      return true;
    }
    return false;
  }

  // make sure s2 is larger than s1
  if(s2 < s1)
  {
    return false;
  }

  // move through both strings simultaniously
  let p1 = 0;
  let p2 = 0;

  while(p2 < s2.length)
  {
    // if the two characters match, advance both pointers
    if(s1[p1] === s2[p2])
    {
      p1++;
      p2++;
    }
    // if they don't match, only advance p2
    else
    {
      p2++;
    }

    // check to see if we made it to the end of the first string
    if(p1 === s1.length)
    {
      return true;
    }
  }
  return false;
}



// test cases
const test_cases =
[
  ["hello", "hello world"], // true
  ["sing", "sting"], // true
  ["abc", "abracadabra"], // true
  ["abc", "acb"], // false (order matters)
];

for(let test_case of test_cases)
{
  console.log(isSubsequence(test_case[0], test_case[1]));
}
