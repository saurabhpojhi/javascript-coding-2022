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