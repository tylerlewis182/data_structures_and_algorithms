/*

Recursion - Fibonacci Sequence

Write a recursive function called fib which accepts a number and returns
the nth number in the Fibonacci sequence. Recall that the Fibonacci
sequence is the sequence of whole numbers 1,1,2,3,5,8,... which
starts with 1 and 1, and where every number thereafter is equal to
the sum of the previous two numbers.

*/

function fib(n)
{
  if(n <= 2)
  {
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

// test cases
let test_cases = [
  4, // 3
  10, // 55
  28, // 317811
  35, // 9227465
];

for(let test_case of test_cases)
{
  console.log(fib(test_case));
}
