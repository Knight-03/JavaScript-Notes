//paramerter destructuring 
// we use it in 
// object 
// react

const person  = {
    firstname : "Knight",
    gender : "female",
}

// function printDetail(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender);
// }

function printDetail({firstname,gender}){
    console.log(firstname);
    console.log(gender);
    // console.log(age);
}
printDetail(person)