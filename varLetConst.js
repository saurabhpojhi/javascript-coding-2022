/* How to Declare Variables in JavaScript*/

// Using var
var price = 10;

// Using let
let single = true;

// Using const
const javascript = "varLetString";

// There are mainly three types of scope:

// Block Scope  
// Functional Scope  
// Global Scope

/* How to Use JavaScript Variables in Block Scope*/

/* If you do not want a variable declared inside a { } block to be accessed outside of the block, you need to declare them using the let or const keywords. Variables declared with the var keyword inside the { } block are accessible outside of the block too. So, be careful.*/

{
    let first_name ="saurabh";
    const pincode =841219;
    var age = 26;

}
console.log(first_name);  // ReferenceError: first_name is not defined
console.log(pincode);     // ReferenceError: pincode is not defined
console.log(age);      // 26
// Do not use the var keyword inside a block (block scope). Always use let and const instead.

/*How to Use JavaScript Variables in Functional Scope*/
function f1(){
    let first_name ="saurabh";
    const pincode =841219;
    var age = 26;
}
f1();
console.log(first_name);  // ReferenceError: first_name is not defined
console.log(pincode);     // ReferenceError: pincode is not defined
console.log(age);      // ReferenceError: age is not defined
// none of the variables are accessible outside of the function, not even age which is declared using var. So, the conclusion is,
//The variable declared with var inside a function is not accessible outside of it. The keyword var has function-scope.

/*How to Use JavaScript Variables in Global Scope*/

// Variables declared outside of any functions and blocks are global and are said to have Global Scope. This means you can access them from any part of the current JavaScript program.
// You can use var, let, and const to declare global variables. 