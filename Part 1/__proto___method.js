const obj1 = {
    key1: "value1",
    key2: "value2"
}


// const obj2 = {
//     key3: "value3"
// }
// console.log(obj2.key2) // undefine de ra 

// pr meko chahiye ke obj2 bhi obj one ke keys ko access kr shake 
// so for that 
// ham ek aur tarike se obj bana shakte h 



// __proto__

// official ecmascript documentation --> [[prototype]]

// __proto__ , [[prototype]] banne same j che browser ma 
// aa banne browser ka to documentation ma jova made che 



// ^ prototype aa alag property che js ni 



const obj2 = Object.create(obj1) // aa mane ek khali obj banani apse 
// * aa rite obj banav ti vakhte apde obj1 as object parameter pass karyo  
// console.log(obj2)  // empty obj
// console.log(obj2.__proto__) // obj1 avese
obj2.key3 = "value3";
// console.log(obj2) 
/*
* output 
        ^ {key3 : "value3" __proto__:}
*/
console.log(obj2.key2)  // js ne aa key obj2 ma madi atle ene __proto__ 
// ma jai ne joyu
// have hu access kari shaku chu 

