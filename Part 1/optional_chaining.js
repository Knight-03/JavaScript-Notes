// Optional CHaining 
const user = {
    firstNmae : "Knight",
    // address : {houseNumber : '1234'}
}
console.log(user.firstNmae)
// console.log(user.address.houseNumber) //it will give error 
console.log(user?.address?.houseNumber) // it gives undefined 
