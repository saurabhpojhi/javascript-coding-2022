/* What is an Array in JavaScript */

// A pair of square brackets [] represents an array in JavaScript. All the elements in the array are comma(,) separated.
// you can create an array with elements of type String, Boolean, Number, Objects, and even other Arrays.

// example of an array with four elements: type Number, Boolean, String, and Object.
const mixedTypeArray=[100, true, 'github', {}] ;

/* How to Create an Array in JavaScript */

// You can create an array in multiple ways in JavaScript.
// The most straightforward way is by assigning an array value to a variable.
const programming =['java', 'python','c','c++'];

// You can also use the Array constructor to create an array.
const programming1 = new Array('java', 'python','c','c++');

//There are other methods like Array.of() and Array.from(), and the spread operator( ...) helps you create arrays, too. 

/* How to Get Elements from an Array in JS */
//You can access and retrieve elements from an array using its index. 
//You need to use the square bracket syntax to access array elements.

// const element = array[index];
const programming2 =['java', 'python','c','c++'];
const len = programming2.length;
programming2[len -1];
programming2[len, 2];

// loop through the array using a regular for or forEach loop, or any other loop.
const programming3 =['java', 'python','c','c++'];

for (let i=0; i<programming3.length; i++){
    console.log(`Elements at index ${i} is ${programming3[i]}`);
}
// Elements at index 0 is java      // output
// Elements at index 1 is python
// Elements at index 2 is c
// Elements at index 3 is c++

/* How to Add Elements to an Array in JS */

// Use the push() method to insert an element into an array. 
//The push() method adds an element at the end of the array.

const programming4 =['java', 'python','c','c++'];
programming4.push('R');
console.log(programming4);  // [ 'java', 'python', 'c', 'c++', 'R' ]

//add an element to the beginning of the array, you'll need to use the unshift() method.
const programming5 =['java', 'python','c','c++'];
programming5.unshift('R');
console.log(programming5);    // [ 'R', 'java', 'python', 'c', 'c++' ]

/* How to Remove Elements from an Array in JS*/

// easiest way to remove a single element from an array is using the pop() method.
// the pop() method, it removes an element from the end of the array
const programming6 =['java', 'python','c','c++'];
programming6.pop();
console.log(programming6);  // [ 'java', 'python', 'c' ]

// Use the shift() method to remove an element from the beginning of an array.
const programming7 =['java', 'python','c','c++'];
programming7.shift();
console.log(programming7);  // [ 'python', 'c', 'c++' ]

/* How to Copy and Clone an Array in JS */

// an array to a new array using the slice() method.
//  slice() method doesn't change the original array. 
const programming8 =['java', 'python','c','c++','javascript'];
const programming8Copy = programming8.slice();

console.log(programming8Copy);  // [ 'java', 'python', 'c', 'c++', 'javascript' ]


