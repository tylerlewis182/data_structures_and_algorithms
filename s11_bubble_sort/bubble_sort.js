/*

Bubble Sort

Write a function that accepts an unsorted array of
numbers and returns an array that has been sorted
in ascending order.  Use the Bubble Sort method.

*/

function bubbleSort(unsorted_arr)
{
  let arr = [...unsorted_arr]; // create a deep copy of arr
  let temp = null;
  let made_change = true;

  while(made_change === true)
  {
    made_change = false;
    for(let i=0; i<arr.length-1; i++)
    {
      // if left is larger than right, swap values
      if(arr[i] > arr[i+1])
      {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        made_change = true;
      }
    }
  }
  return arr;
}



// test cases
let test_cases =
[
  [2,3,1,4], // [1,2,3,4]
  [2,5,1,6], // [1,2,5,6]
  [9,5,4,6,1,2,8,7,3], // [1,2,3,4,5,6,7,8,9]
];

for(let test_case of test_cases)
{
  console.log(bubbleSort(test_case));
}
