// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%


// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans); // ek function print thashe 
// ans();


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("harshit", "sharma"); // function exection context banse aa line ma 
// console.log(ans);
ans(); // navo FEC banse cuz ans ma ek function che 
// printFullName 

// * PrintName ne return kare che aa khali hate return nai thay 
// * aa local memory ma jetla parameters che emne lai ne return thashe 
// * printName ne khabar che mare firstName LastName ne jarur padse atle 
// * aa emne lai ne return thashe 
// to haal ans jode PrintName vadu function  + lN + FN che 
// ** ene j closure kevay 


