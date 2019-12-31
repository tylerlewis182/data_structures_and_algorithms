/*

Selection Sort

Loop through the array and select the smallest
element then move it to the front of the array.

*/

function selectionSort(unsorted_arr)
{
  let arr = [...unsorted_arr];

  for(let i=0; i<arr.length; i++)
  {
    let smallest = i;
    for(let j=i+1; j<arr.length; j++)
    {
      // console.log(i, j);
      if(arr[j] < arr[smallest])
      {
        smallest = j;
      }
    }
    // swap
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
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
  console.log(selectionSort(test_case));
}
