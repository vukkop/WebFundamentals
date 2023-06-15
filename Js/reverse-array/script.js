// Reversing an array
// Write a function `reverseArray` that takes in an array, and returns the array reversed,
// try it without creating a new array

var arr1 = [11, 22, 33, 44, 55];
// expected // [55, 44, 33, 22, 11];

var arr2 = ["a", "b", "c", "d", "e"];
// ["e", "d", "c", "b", "a"];

// 👉write the pseudo code first
// DRIVER 🚗
// PRESENTER 👨‍🏫
// NAVIGATOR 🧭

function reverseArray(someArray) {

  var temp = 0
  var lastIndex = someArray.length - 1

  for (let i = 0; i < someArray.length / 2; i++) {
    temp = someArray[i];
    someArray[i] = someArray[lastIndex - i]
    someArray[lastIndex - i] = temp
  }
  return someArray
    // your code here
}

// 🚨 don't forget to invoke/call the function

// use a 'for-loop' then refactor it using a 'while' loop

// we expect to get back...
// [55, 44, 33, 22, 11];
// ["e", "d", "c", "b", "a"];
