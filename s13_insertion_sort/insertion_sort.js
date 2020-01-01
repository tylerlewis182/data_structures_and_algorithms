/*

Insertiion Sort

Loop through the array and select each value in the array.
Insert that value into it's final sorted position in the
left 'half' of the array. The left 'half' starts as the
first element in the array and grows by one element each
time a new item is sorted.

*/

function insertionSort(unsorted_arr)
{
  let arr = [...unsorted_arr];

  for(let i=0; i<arr.length; i++)
  {
    if(arr[i+1] < arr[i])
    {
      // remove to element to be inserted
      let element = arr.splice(i+1,1)[0];
      // moving left to right, find correct place to insert element
      for(let j=0; j<arr.length; j++)
      {
        if(arr[j] >= element)
        {
          // insert the element at j index
          arr.splice(j, 0, element);
          break;
        }
      }
    }
  }
  return arr;
}


// test cases
let test_cases =
[
  [3,2,1,5,4], // [1,2,3,4,5]
  [2,3,1,4], // [1,2,3,4]
  [2,5,1,6], // [1,2,5,6]
  [9,5,4,6,1,2,8,7,3], // [1,2,3,4,5,6,7,8,9]
];

for(let test_case of test_cases)
{
  console.log(insertionSort(test_case));
}
