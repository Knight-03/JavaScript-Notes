//block scope vs function scope
//let ya cosnt thi variable banayo che to aa block ma j use kari shakishu apde ene  
//let and const are block scope

//var is function scope 

//block - 1
{
    let firstname = "dhvani";
    console.log(firstname);
}

// console.log(firstname); // this will give error

//block - 2
{
    let firstname = "knight";
    console.log(firstname)
}

//global scope 
const firstname = "zerox";
console.log(firstname)



// function myApp() {

//     if(true) {
//         var myvar = "value59";
//         console.log("insider myfunc", myvar);
//     }
//     console.log(myvar);
// }

// myApp();


/* playing with var and let ---------------------

var firstname = "kittu"
console.log(firstname)
var firstname = "zerox";

console.log(fname)
let fname= "yes" 
this.fname = "kittu"

let fname = "no";
for(var i=0;i<3;i++)
{
    console.log(fname)
    fname = "zerox"
}
console.log(this.fname)

*/