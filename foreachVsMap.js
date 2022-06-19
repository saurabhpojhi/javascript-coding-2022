// for each vs map 

let arr = [10,20,30,40,50,60];
console.log(arr);

// arr.forEach((item, index,array)=>{
//      console.log(item+'=='+index+'=='+array)
//      arr[index] = item + 2;
// })

console.log(arr);


// Map

 let newArray = arr.map((item, index,array)=>{
    // console.log(item+'=='+index+'=='+array)
    arr[index] = item + 2;
    return arr[index];
})

console.log(newArray);