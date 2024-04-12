// important array methods 

// num  = [1,2,3,4,5]

// num.forEach(element => {
//     console.log(element*2)
// });

// ForEach mehtod
// const users = [
//     {firstname: "foo",age:19},
//     {firstname: "bar",age:20},
//     {firstname: "baz",age:21},
//     {firstname:"jaz", age:22},
// ]
// users.forEach(fname => {
//     console.log(fname.firstname)
// })

// Map Method
/*
const num = [1,2,3,4,5]

// const square = number => {
//     return number*number
// }
const sqrt = num.map((square) => {
    return square*square;
});
console.log(sqrt)
*/

//*filter method 
// anu call back funtion hamesa true or false return kare  map ma array return kare 
// map ma array bane number no jene print kari shakhiye

/*const num = [1,2,3,4,5]

const ans = num.filter((number) => {
    return number > 3;
})
console.log(ans)
*/

//reduce method 

const num = [1,2,3,4,5]
// aim : sum of all the numbers in array 
const ans = num.reduce((accumulator,currentValue) => {
    // console.log(accumulator,currentValue)
    return accumulator + currentValue;
})
console.log(ans)
// accumulator  currentValue  return 
//       1          2           3(aa value have accumulator ma jashe)
//       3          3           6 (")
//       6          4           10 (")
//       10         5           15(")

const userCart = [
    {product : 1 ,productNmae : "mobile", price : 12000},
    {product : 2 ,productNmae : "tablet", price : 5000},
    {product : 3 ,productNmae : "laptop", price : 20000},
]
const price_sum = userCart.reduce((totalPrice,currentProduce) =>{
    return totalPrice + currentProduce.price;
},0) //totalprice in value 0 thi start thashe its call inital value
console.log(price_sum)