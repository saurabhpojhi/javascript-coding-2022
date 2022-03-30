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

     let city = ["Delhi","Chennai","Mumbai"];     
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