/*

Recursion - Range

Write a function called recursiveRange which accepts a number 'n'
and adds up all the numbers from 0 to 'n'.

*/

function recursiveRange(n)
{
  var sum = n;

  function helper(num)
  {
    if(num === 0)
    {
      return 0;
    }
    num--;
    sum = sum + num;
    return(helper(num));
  }
  helper(n);
  return sum;
}



// test cases
let test_cases =
[
  6, // 21
  10, // 55
];

for(let test_case of test_cases)
{
  console.log(recursiveRange(test_case));
}
