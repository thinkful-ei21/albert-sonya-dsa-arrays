'use strict';

const Array = require('./array-implementation.js');


function main() {
  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  // arr.push(3);
  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);

  // arr.pop();
  // arr.pop();
  // arr.pop();

  // console.log(arr);
  // console.log(arr.get(0));

  arr.push('tauhida');
  console.log(arr.get(0));
}

main();


/*

What is the length, capacity and memory address of your array?
* at arr.push(3)
* console prints: Array { length: 1, _capacity: 3, ptr: 0 }

Empty the array and add just one item arr.push("tauhida"); What is the result? Can you explain your result?
* console prints: NaN
* This could be because the memory module uses an instance of Float64Array, which is a typed array for storing numbers
* So if a value is set to that array which is not a number, it will store the value of NaN instead

What is the purpose of the _resize() function in your Array class?
* _resize() is called when length reaches capacity, so a newer and bigger memory space is needed
* doing so will give us a new pointer, and 'head' in memory will be increased by 'size' so we can use up to capacity before having to call resize again

*/