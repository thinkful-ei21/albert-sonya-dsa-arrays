'use strict';

// URL-ifying a string

// program can only run 1 pass thru the input

// Input: tauhida parveen
// Output: tauhida%20parveen
// input: www.thinkful.com /tauh ida parv een
// output: www.thinkful.com%20/tauh%20ida%20parv%20een

/*
function urlify(str) {
  // split str at ' '
  const lesserStr = str.split(' ');
  // join back via %20
  return lesserStr.join('%20');
}
// this function should be O(n), linear time
console.log(urlify('albert sare sonya slegers'));
*/

// Filtering an array

// remove all numbers less than 5 from an array

// function filterArray(arr, value) {
//   // sort array an find index of value if it exists
//   let index = arr.sort((a, b) => a > b).indexOf(value);
//   if (index === -1) {
//     return arr;
//   } else {
//     arr.splice(0, index);
//   } 
//   return arr;
    
// }

// console.log(filterArray([1, 8, 3, 2, 5, 6, 7, 8, 5, 21], 5));

