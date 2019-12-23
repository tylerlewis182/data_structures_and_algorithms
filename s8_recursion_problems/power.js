/*

Recursion - Power

Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow(). Do not
worry about negative bases and exponents.

*/

function power(base, exponent)
{
  if(exponent === 0)
  {
    return 1;
  }
  return base * power(base, exponent - 1);
}



// test cases
const test_cases =
[
  [2, 0], // 1
  [2, 2], // 4
  [2, 4], // 16
];

for(let test_case of test_cases)
{
  console.log(power(test_case[0], test_case[1]));
}
