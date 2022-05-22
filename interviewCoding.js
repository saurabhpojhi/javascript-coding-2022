// 1. convert array [] to object {} in javascript 

// method 1  using loop

let arrayList = ['Tommy','Jerry','Micky','Mouse'];
let myObj = {};
 // output { '0': 'Tommy', '1': 'Jerry', '2': 'Micky', '3': 'Mouse' }

for(let i =0; i<arrayList.length; i++){
    myObj[i] = arrayList[i]
}
console.log(myObj);

// method 2 object.assign 

let arrayList1 = ['Tommy','Jerry','Micky','Mouse'];
let myObj1 = Object.assign({},arrayList1);
console.log(myObj1);

// method 3 spreadOperator
let arrayList2 = ['Tommy','Jerry','Micky','Mouse'];
let myObj2 = {...arrayList2}
console.log(myObj2);

// 2. convert object {} to array []  in javascript 

// method 1 for loop

let objList = {'a':1,'b':2,'c':3,'d':4,'e':5};
let arrList = [];
for(key in objList){
    arrList.push([key,objList[key]])
}
console.log(arrList);  //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ], [ 'e', 5 ] ]

// method 2 object.key or map 
let objList1 = {'a':1,'b':2,'c':3,'d':4,'e':5};
console.log(Object.keys(objList1));  // it return all the object key   like [ 'a', 'b', 'c', 'd', 'e' ]

//  map 
let objList2 = {'a':1,'b':2,'c':3,'d':4,'e':5};
let arrList1 = Object.keys(objList2).map(key =>{
    return [key, objList2[key]];
});

console.log(arrList1);  // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ], [ 'e', 5 ] ]