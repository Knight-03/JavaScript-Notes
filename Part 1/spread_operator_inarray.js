//spread operator

const arr1 = [1,2,3];
const arr2 = [5,6,7];

// const newArr = [...arr1,...arr2, 89,69]; // cloned arr1
const newArr = [..."abc"]; 
console.log(newArr); // ["a", "b", "c]
const newobj = {..."abcdefghijklmnopqrstuvwxyz"}
console.log(newobj) // { 0 : "a", 1 : "b", 2 : "c"....}