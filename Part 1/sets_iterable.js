// sets (it is iterable)
// store data 
// sets also have its own mehods
// no index bases access 
// order is not guaranteed 
// unique items only (no duplicaetd allowed)

// const num = new Set("Kittu")
// console.log(num)

// const num = new Set()
// const items = ["item1","item2","item3"]
// num.add("Kittu")
// num.add(1)
// num.add(2)
// num.add(items)
// num.add(items)
// num.add(["item1","item2","item3"])
// console.log(num)
// if(num.has(1))
// {
//     console.log("has 1")
// }
// else
// {
//     console.log("1 is not present")
// }
// for(let number of num)
// {
//     console.log(number)
// }

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);