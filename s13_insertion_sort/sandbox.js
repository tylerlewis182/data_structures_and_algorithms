
let arr = [1,2,3,4,5];

// let x = arr.slice(1, 2)[0];
let x = arr.splice(1,1)[0]; // index, num_to_remove
console.log(arr);

arr.splice(-1, 0, x); // index, num_to_remove, element_to_insert
console.log(arr);

