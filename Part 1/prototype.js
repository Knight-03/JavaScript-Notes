function hello(){
    console.log("hello world")
}
// javascript function ===> function + object 
// js function aa function pn che and object pn che 


// name property ---> tells function name; 
// console.log(hello.name); // it will give name of the function 
// baad m baat karenge iss ke bare m 

// you can add your own property 
// hello.myOwnProperty = "very unique value"
// console.log(hello.myOwnProperty)


// function provicdes more usefull properties 

console.log(hello.prototype) // aa ek khali object che ==> {}

// *only function provide "prototype" property 
// if hello is any variable or list(array) or etc it will print 
// prototype is not  present
// if(hello.prototype)
// {
//     console.log("prototype is present")
// }
// else
// {
//     console.log("prototype is not present")
// }



// prototype property ek khali space ek khali obj provide kare che 
// jeno apde use kari shakhiye property add karva mate 
// example of 
// hello.prototype.abc = "abc"
// hello.prototype.def = "def"
// hello.prototype.sing = function(){
//     return "lalalala";
// }
// console.log(hello.prototype)
// console.log(hello.prototype.abc)
// console.log(hello.prototype.sing())
