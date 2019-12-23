/*

Recursion - Helper Function

Write a function that accepts an array and collects all
of the odd values from that array. Return the odd values
in a new array.

*/

function collectOdds(arr)
{
  let result = [];

  function helper(helperInput)
  {
    if(helperInput.length === 0)
    {
      return;
    }
    if(helperInput[0] % 2 !== 0)
    {
      result.push(helperInput[0]);
    }
    // Method 1: shift method
    helperInput.shift(); // remove first item from helperInput
    helper(helperInput);

    // Method 2: slice method
    //helper(helperInput.slice(1)); // return array of items 1st idx through END of helperInput
  }
  helper(arr);
  return result;
}


// test cases
console.log(collectOdds([1,2,3,4,5,5,6,7,8,9]));
