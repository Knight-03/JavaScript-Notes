// Synchronous programming vs Asynchronous programming 
// Synchronous Programming 
// console.log("script start");

// for(let i=0;i<10000;i++)
// {
//     console.log("inside for loop");
// }
// console.log("script end");

// jya sudhi for loop puri nai thay tya sudhi end scripr run nai thatu 
//ek type of block thay che code 
// ko code apda agad na code ne block kari shake che ene j sync kevay 

// * js is Synchronous Porgramming Single Threaded programming language 

// example of  Asynchronous Programming 
// console.log("script start");

// setTimeout js jode nathi web browser jode che to aa browser ne aapi dese and pote next line run karshe 
// setTimeout(() =>{
//     console.log("after setTimeout");
// }, 1000);
// console.log("script end");
// output 
// Script Start 
// Script End 
// Inside function 


console.log("script start");

setTimeout(() =>{
    console.log("after setTimeout");
}, 0);

for(let i=1;i< 100;i++){
    console.log("...");
}
console.log("script end");

// output
// Script start
// 99 times ...
// script end
// after setTimeout 
// 0 ms pachi browser pachu to kare che call back fun but aa callBack fun callback queue ma store thay che 
// event loop ene agad nai java de cuz jya sudhi js no code nai pate tya sudhi GEC(Global Execution context)
// ma nai jaay 