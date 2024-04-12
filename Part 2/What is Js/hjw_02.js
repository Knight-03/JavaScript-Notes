// hoisting
// fullname myFunction ne define and declare karya pela j apde print kari shakiye 6iye 
// ene j hoisting kevay 
//cuz aa badha var varibales and function global execution ma pehle thi j aai gya che 

console.log(this);
// console.log(window);
console.log(myFunction);

console.log(fullName);

// function declaration 
function myFunction(){
    console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName);
