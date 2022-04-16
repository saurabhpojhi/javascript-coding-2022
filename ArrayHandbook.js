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
const programming1 = new Array['java', 'python','c','c++'];

//There are other methods like Array.of() and Array.from(), and the spread operator( ...) helps you create arrays, too. 

/* How to Get Elements from an Array in JS */
//You can access and retrieve elements from an array using its index. 
//You need to use the square bracket syntax to access array elements.

// const element = array[index];
const programming2 = new Array['java', 'python','c','c++'];
const len = programming2.length;
programming2[len -1];
programming2[len, 2];

