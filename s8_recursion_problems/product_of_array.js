/*

Recursion - Product of Array

Write a function called productOfArray which takes in an array
of numbers and returns the product of all the numbers in the
array.

*/

function productOfArray(arr)
{
  var helper_input = arr.slice(); // deep copy 'arr'
  var product = 1;

  function helper(helperInput)
  {
    if(helper_input.length === 0)
    {
      return;
    }
    product = product * helper_input[0];
    helper_input.shift();
    return helper(helper_input);
  }
  helper(arr);
  return product;
}





// test cases
const test_cases =
[
  [1,2,3], // 6
  [1,2,3,10], // 60
];

for(let test_case of test_cases)
{
  console.log(productOfArray(test_case));
}
