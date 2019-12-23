/*

Recursion - Countdown

Write a recursive function that accepts a positive number
'n' and counts down from 'n' to zero.  Print each number
in the console.

*/

function countdown(n)
{
  console.log(n);
  if(n <= 0)
  {
    return;
  }
  n--;
  countdown(n);
}


countdown(5);
