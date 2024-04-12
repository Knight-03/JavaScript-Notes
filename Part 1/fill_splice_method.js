// fill method 
// value,  start, end 

// const myArray = new Array(10).fill(0)
// console.log(myArray)

// const myArray = [1,2,3,4,5,6,7,8]
// myArray.fill(0,2,5) // it will change origanal array 
// console.log(myArray)

// splice method 
// * array ke bich m se kuch delete krna h ya kuch insert krna h to 

// start, delete ,insert 
// it change orignal array 
const myArray = ['item1', 'item2', 'item3'];

// delete 
const dleted_item = myArray.splice(1,1);
console.log(dleted_item)

// insert 
myArray.splice(1,0,"inserted item2");
console.log(myArray)

// delete insert 
myArray.splice(1,1,"delted then inserted item2", "inserted item4")
console.log(myArray)