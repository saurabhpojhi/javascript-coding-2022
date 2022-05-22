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
