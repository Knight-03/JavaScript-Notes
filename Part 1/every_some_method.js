// every method 
// some method

// const num = [1,2,3,4,5,6]

// const ans = num.every((number)=>number%2===0);

// const res = num.some((number)=>number%2===0);

// callback function ---> true/false (boolean)
// every method ---> true/false (boolean)

//agar ek pan even number nai hoy to false return karse 
// every mtlb badha check krse 
// some matlb thoda pn element even hashe to true return krse 
// console.log(ans)
// console.log(res)

const userCart = [
    {product : 1 ,productNmae : "mobile", price : 12000},
    {product : 2 ,productNmae : "tablet", price : 5000},
    {product : 3 ,productNmae : "laptop", price : 20000},
]

const less_prize = userCart.every((cartItem)=>cartItem.price<20000);
const less_prize1 = userCart.some((cartItem)=>cartItem.price<=20000);
console.log(less_prize)
console.log(less_prize1)