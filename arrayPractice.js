
let arr = [1,23,44,55,11,11];

console.log(arr.length);

let type = arr instanceof Array;

console.log(type) // check array of array
//console.log(Array.isArray(arr));  // check array of array

// array to string convert

let newStr = arr.toString(); // method 1

console.log(newStr)

let newstr = arr.join('  ');  // method 2

console.log(newstr)


/*
       the Splice() method it returns the removed item an array
       slice () method returns the selected elements in an array as a new arry object 

*/

//          0  1   2  3
let arr1 = [12,13,24,18]; 
//          -4 -3 -2 -1

// slice 

let newArr = arr1.slice(0,2)    // start, end 
console.log(newArr)

// splice 
let arr2 = [12,13,24,18];  

arr2.splice(1,1)  // start,end  ,  here removed 13 
console.log(arr2)