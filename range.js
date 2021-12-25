/*
const range = function(start, end, step) {
  let newList = [];
  if (step > 0) {
    for (let i = start; i <= end; i = i + step) {
      newList.push(i);
    } }
  return newList;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
*/
/*
const lastIndexOf = function(array, number) {
  for (let i = array.length -1; array[i] === number; i++) {
      let newArray = [];
      newArray.push(array[i]);
      return console.log(newArray);
    }
  }
  
 

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1)); 
/*

go through the input array
anytime we see the 'number' we want to know which index position it's at
compile a list of those index positions into a new array
return the last number of that array
*/
/*
const lastIndexOf = function(array, number) {
  return array.lastIndexOf(number);
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2)); //4
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3)); //-1
console.log(lastIndexOf([ 5, 5, 5 ], 5)); //2
console.log(lastIndexOf([], 3)); //-1
*/

const concat = function(array1, array2) {
  return array1.concat(array2);
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]))