 // javaScript String Method

 // #1 Length    // check the length of a string

 const myString = "I love coding"
 console.log(myString.length);

 // #2 Trim     // Remove whiteSpaces at the beginnig and at the end

 const myString1 = "  I love coding  "
 console.log(myString1.length)
// 17
console.log(myString1.trim());
// I love coding
console.log(myString1.trim().length);

// #3 Split   // convert a string to an array

const myString2 = "I love coding";
const arr = myString2.split("");
console.log(arr);
// [
//     'I', ' ', 'l', 'o',
//     'v', 'e', ' ', 'c',
//     'o', 'd', 'i', 'n',
//     'g'
//   ]

// #4 To Lower Case   // Convert the String to lowercases letters

const myString3 = "I LOVE CODING";
console.log(myString3.toLowerCase());  

// i love coding

//#5 To Upper case   // convert the string to uppercase letters

const myString4 ="i love coding";
console.log(myString4.toUpperCase());
// I LOVE CODING

// #6 Replace      // Returns a new string with a text replaced by different text

const myString5 ="I love coding";
const replacedString = myString5.replace('coding', 'programming');
console.log(replacedString);

// I LOVE CODING
// I love programming

// #7 Concat     // Concat string arguents to a particular string

