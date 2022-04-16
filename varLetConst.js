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

// {
//     let first_name ="saurabh";
//     const pincode =841219;
//     var age = 26;

// }
// console.log(first_name);  // ReferenceError: first_name is not defined
// console.log(pincode);     // ReferenceError: pincode is not defined
// console.log(age);      // 26
// Do not use the var keyword inside a block (block scope). Always use let and const instead.

/*How to Use JavaScript Variables in Functional Scope*/
// function f1(){
//     let first_name ="saurabh";
//     const pincode =841219;
//     var age = 26;
// }
// f1();
// console.log(first_name);  // ReferenceError: first_name is not defined
// console.log(pincode);     // ReferenceError: pincode is not defined
// console.log(age);      // ReferenceError: age is not defined
// none of the variables are accessible outside of the function, not even age which is declared using var. So, the conclusion is,
//The variable declared with var inside a function is not accessible outside of it. The keyword var has function-scope.

/*How to Use JavaScript Variables in Global Scope*/

// Variables declared outside of any functions and blocks are global and are said to have Global Scope. This means you can access them from any part of the current JavaScript program.
// You can use var, let, and const to declare global variables. 

let first_name1 ="saurabh";
const mobile= 7277478119;
var age = 27;

function f2(){
    console.log(first_name1);  // saurabh
    console.log(mobile);     // 7277478119
    console.log(age);  // 27
}
f2();

  // or if you want to below code that you can write you will get same output
   console.log(first_name1);  // saurabh
    console.log(mobile);     // 7277478119
    console.log(age);  // 27

    // As you see, the variables are accessible everywhere.
// to restrict the scope of a variable using the var, let, and const keywords,

// var: The functional scope level
// let: The block scope level
// const: The block scope level

/*How to Reassign a New Value to a Variable in JavaScript*/

//Once you've declared a variable with var or let, you can reassign a new value to the variable in your programming flow. 
//It is possible if the variable is accessible to assign a value. 
//But with const, you can't reassign a new value at all.

// Declare variables with initial values
let first_name2 ="saurabh";
const mobileNo= 7277478111;    //TypeError: Assignment to constant variable.
var pin = 841219;

// Reassign values 
 first_name2 ="kumar";
 mobileNo= 727747891;   
 pin = 841213;

 //There is a tricky part with cost that you must be aware of. When an object is declared and assigned a value with const