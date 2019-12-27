

function numberCompare(num1, num2)
{
  return num1 - num2; // 6 - 4 = 2
}

let arr = [6,4,15,10];
console.log(arr);

// SORT METHOD:
// function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1; // or any negative number
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1; // or any positive number greater than zero
//   }
//   // a must be equal to b
//   return 0;
// }

arr.sort(numberCompare);
console.log(arr);
