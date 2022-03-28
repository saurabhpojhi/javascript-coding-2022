// Objects and methods in JavaScript

// How to create objects in javascript;

const person ={
  name:"saurabh"
};    // this is simple and most popular way 

// you can also use  New keyword

const person = new Object();
person.name='saurabh';

 // you can also use  'New'  with user defined constructor function 

 function person(name){
     this.name=name;
 }
