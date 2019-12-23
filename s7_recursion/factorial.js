/*

Recursion - Factorial

Write a recursive function that calculates the
factorial of a number 'n'.

*/

function factorial(n)
{
  // factorial is only defined for non-negative numbers
  if(n < 0)
  {
    return undefined;
  }

  // 0! = 1 and 1! = 1
  else if(n <= 1)
  {
    return 1;
  }
  return n * factorial(n-1);
}


console.log(factorial(2));
