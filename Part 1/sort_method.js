// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57
// sort  

// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)

// * pn js ene string ni jem consider kari le che atle 
// [1200, 3000, 400, 5, 9]  aa rite sort thai jaay che 

// ["5", "9", "1210", "410", "3000"] 
// [53, 57, 49, 52, 51] //according to ascii value 


// ? faydo 
// const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
// userNames.sort();
// console.log(userNames);

// const num = [5,9,1200,410,3000]

// num.sort((a,b) => {
//     return a-b;
// })

//assending ma to a-b or else b - a
// num.sort((a,b)=>a-b)
// console.log(num)
// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4

const product = [
    {productID : 1,productName : 'p1', price: 300},
    {productID : 2,productName : 'p2', price: 3000},
    {productID : 3,productName : 'p3', price: 200},
    {productID : 4,productName : 'p4', price: 8000},
    {productID : 5,productName : 'p5', price: 500},
]
//sort low to high 

// product.sort((a,b) => { // this will change our array we don't want that 
//     return a.price - b.price;
// })
//we'll clone it 
const lowToHigh = product.slice(0).sort((a,b) => { 
    return a.price - b.price;
})
console.log(lowToHigh)

//HighToLow
const HighToLow = product.slice(0).sort((a,b) => { 
    return b.price - a.price;
})
console.log(HighToLow)
