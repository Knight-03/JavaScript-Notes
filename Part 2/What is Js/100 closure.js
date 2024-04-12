// function myFunction(power){
//     return function(number){
//        return number ** power;
//     }
// }
// const squre = myFunction(3);
// const ans = squre(2);
// console.log(ans)


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);

const myFunction = (power) => (number) => number ** power;
    
const squre = myFunction(3);
const ans = squre(2);
console.log(ans)


const cube = myFunction(3);
const ans2 = cube(3);
console.log(ans2);