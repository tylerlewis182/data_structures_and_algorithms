/*

Naive String Search

Write a function that accepts a string and substring.
Count the number of times the substring is conatained
in the string.  Return the count.

*/

function naiveStringSearch(s, ss)
{
  let count = 0;
  let s_slice = null;

  for(let i=0; i<(s.length-ss.length+1); i++)
  {
    if(s[i] === ss[0])
    {
      s_slice = s.slice(i, i + ss.length);
      if(s_slice === ss)
      {
        count++;
      }
    }
  }
  return count;
}


// test cases
let test_cases =
[
  ["catcatcat", "cat"], // 3
  ["catcatcat", "dog"], // 0
  ["abacadabra", "ab"], // 2
  ["aabca", "a"],       // 3
  ["bbbbb", "bb"],      // 4
];

for(let test_case of test_cases)
{
  console.log(naiveStringSearch(test_case[0], test_case[1]));
}
