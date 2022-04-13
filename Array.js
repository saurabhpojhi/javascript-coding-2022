// #1 JavaScript Array concat()  // JavaScript Array concat()

let primeNumber = [2, 3, 5, 7]
let evenNumber = [2, 4, 6, 8]

let joinedArray = primeNumber.concat(evenNumber);
console.log(joinedArray);

// # Using concat() method                    //

var languages1 = ["javascript", "python", "java"];
var languages2 = ["c", "C++"];

var newArr1 = languages1.concat(languages2);     // concatenating two arrays

console.log(newArr1);

var newArr2 = languages1.concat("Erlang", languages2);   // concatenating a value and array
console.log(newArr2);

// #2 JavaScript Array pop()      // The pop() method removes the last element from an array and returns that element.

let cities = ["Delhi", "Chennai", "Kolkat", "Mumbai"];

let removedCities = cities.pop();  //remove the last element

console.log(cities);
console.log(removedCities);

// // // Using pop() method

var languages = ["javascript", "python", "java", "c++", "c"];

var popped = languages.pop();
console.log(popped);
console.log(languages);

// #3 JavaScript Array push()       // The push() method adds zero or more elements to the end of the array.

let city = ["Delhi", "Chennai", "Mumbai"];
city.push("Bangalore");
console.log(city);

// // Using push() method
var languagesProgramming = ["javascript", "python", "java", "c++", "c"];
languagesProgramming.push("cobol");
console.log(languagesProgramming);

// #4 JavaScript Array shift()          //  The shift() method removes the first element from an array and returns that element.

var programmingLanguges = ["javascript", "python", "java", "c++", "c"];

let removedFirst = programmingLanguges.shift();
console.log(removedFirst);
console.log(programmingLanguges);

// #5 JavaScript Array unshift()       

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
var programmingLanguges2 = ["javascript", "python", "java", "c++", "c"];

let addedFirst = programmingLanguges2.unshift("R");
console.log(addedFirst);
console.log(programmingLanguges2);

// To do 31 /3/2022 list

// #5 JavaScript Array find()  // The find() method returns the value of the first array element that satisfies the provided test function.
      
   // 1: Using find() method
   //  2: find() with Object elements


// #6 Javascript Array filter()     // The filter() method returns a new array with all elements that pass the test defined by the given function.

// 1: Filtering out values from Array
// 2: Searching in Array

// #7 JavaScript Array findIndex()   //The JavaScript Array findIndex() method returns the index of the first array element that satisfies the provided test function or else returns -1.

// 1: Using findIndex() method
 


// #8 Javascript Array forEach()
// #9 Javascript Array isArray()
// #10 JavaScript Array length()


// #11 JavaScript Array map()
// #12 Javascript Array reduce()
// #13 JavaScript Array reverse()
// #14 JavaScript Array slice()
// #15  Javascript Array toString()