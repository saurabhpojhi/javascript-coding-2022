// reverse string 

/*
solution- 1 
1 .given string - convert it into array
2. - reverse it the array
3. turn the array back into string
*/
const revString = (str)=>{
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    console.log(str);
}
revString("apple");  // elppa



/*
solution- 2 
1 .given string - create empty array
2. - loop through each character
3. return the reverse
*/

