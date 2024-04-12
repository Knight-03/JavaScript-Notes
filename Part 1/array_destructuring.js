//array destructuing 
const myarray = ["val1", "val2", "val3", "val4"]

let [myvar1, myvar2,...mynewarray] = myarray

console.log(myvar1);
console.log(myvar2);
console.log(mynewarray);


// output 
// val1 
// val2
// [ 'val3', 'val4' ]