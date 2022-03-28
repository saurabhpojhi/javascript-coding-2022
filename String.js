 // javaScript String Method

 // #1 Length    // check the length of a string

 const myString = "I love coding"
 console.log(myString.length);

 // #2  Trim     // Remove whiteSpaces at the beginnig and at the end

 const myString1 = "  I love coding  "
 console.log(myString1.length)
// 17
console.log(myString1.trim());
// I love coding
console.log(myString1.trim().length);

// # Split   // convert a string to an array

const myString2 = "I love coding";
const arr = myString2.split("");
console.log(arr);
// [
//     'I', ' ', 'l', 'o',
//     'v', 'e', ' ', 'c',
//     'o', 'd', 'i', 'n',
//     'g'
//   ]

// #