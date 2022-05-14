// modern javascript
// let const
// template string
// arrow function
// desctrutuing
// object props
// default arguments
// array in es6
// new global variable

//      1. let const
// var declare in function scoped
// let and const declared in block scoped

//  var name = "saurabh";
//  console.log(name);

// let name = "saurabh";
// console.log(name);

// const name = "saurabh";
// console.log(name);

// var name = "saurabh";
// name ="gupta";
// console.log(name);        // output gupta

//  let name = "saurabh";
// name ="gupta";
// console.log(name);        // output gupta

// const name = "saurabh";     // in const cannnot we chanegd value 
// name ="gupta";
// console.log(name);        // output:  here we got error  like -  TypeError: Assignment to constant variable.

// function modjs(love){
//     if(love){
//         let name = "saurabh";
//     const sname = "gupta";

//     console.log("my name is "+ name + " "+sname);   // output: my name is saurabh gupta
//     }

// }
// modjs(true);


// function modjs(love){
//     if(love){
//         var name = "saurabh";
//     var sname = "gupta";

//     console.log("my name is "+ name + " "+sname);  // output: my name is saurabh gupta
//     }

// }
// modjs(true);

// function modjs(love){
//     if(love){
//         var name = "saurabh";
//     var sname = "gupta";
//     }
//     console.log("my name is "+ name + " "+sname); // output: my name is saurabh gupta
// }
// modjs(true);

// function modjs(love) {
//     if (love) {
//         let name = "saurabh";
//         const sname = "gupta";

//     }
//     console.log("my name is " + name + " " + sname);      // output: ReferenceError: name is not defined

// }
// modjs(true);

// var India = "Bihar";   // this variable is global scope
// if(true){
//     var India = "UP";  // this is block scope
//     console.log(India);
// }

// console.log(India);        // output :  UP UP


// let India = "Bihar";   // this variable is global scope
// if(true){
//     let India = "UP";  // this is block scope
//     console.log(India);
// }

// console.log(India);     // output :  UP Bihar

// let India = "Bihar";   // this variable is global scope
// if(true){
//     let India = "UP";  // this is block scope
//     console.log(India);
// }

// console.log(India);     // output :  UP Bihar



const India = "Bihar";   // this variable is global scope
if(true){
    const India = "UP";  // this is block scope
    console.log(India);
}

console.log(India);     // output :  UP Bihar
