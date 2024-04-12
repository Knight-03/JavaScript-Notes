// console.log(this) 
// this === window

function myFunc(){
    // but soemtime it is risky so dev use 
    "use strict" // undefined aa jayega 
    console.log(this); // it will print window obj on browser 
}
myFunc();