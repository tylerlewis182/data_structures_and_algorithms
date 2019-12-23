/*

Recursion - Factorial

Write a function called factorial which accepts a number and returns
the factorial of that number.  A factorial is the product of an
integer and all the integers below it. ( 4! === 4 * 3 * 2 * 1 === 24).
Factorial of zero is equal to one.

*/

function factorial(n)
{
  if(n <= 1)
  {
    return 1;
  }
  return n * factorial(n-1);
}



// test cases
const test_cases =
[
  1, // 1
  2, // 2
  4, // 24
  7, // 5040
];

for(let test_case of test_cases)
{
  console.log(factorial(test_case));
}
