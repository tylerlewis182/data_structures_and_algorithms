/*

Frequency Counter - Same Frequency

Write a function called sameFrequency.  Given two positive integers,
find out if the two numbers have the same frequency of digits.
Your solution MUST have time complexity of O(n).

*/

function sameFrequency(n1, n2)
{
  // convert n1 and n2 to strings
  const s1 = n1.toString();
  const s2 = n2.toString();

  // make sure both strings are the same length
  if(s1.length !== s2.length)
  {
    return false;
  }

  // put chars of each string into an object
  const frequencyCounter1 = {};
  for(let char of s1)
  {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  const frequencyCounter2 = {};
  for(let char of s2)
  {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // make sure both objects have identical key-value pairs sets
  for(let key in frequencyCounter1)
  {
    if(frequencyCounter1[key] !== frequencyCounter2[key])
    {
      return false;
    }
  }
  return true;
}




// test cases
const test_cases =
[
  [128, 281], // true
  [34, 14], // false
  [3589578, 5879385], // true
  [22, 222], // false
];

for(let test_case of test_cases)
{
  console.log(sameFrequency(test_case[0], test_case[1]));
}
