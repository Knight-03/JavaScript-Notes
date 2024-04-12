const key = "email";
const person = {
    name : "cam",
    age : "20",
    "person hobbies" : ["singing","time passing"]
}
// console.log(person)
// console.log(person["name"])
// console.log(person.age)
// console.log(person["person hobbies"])

// //how to add key value pair to object
// person["sex"] = "female" // person.sex = "female"
// console.log(person)

// person[key] = "drp@gmail.com";
// console.log(person)

// how to iterate objects
// for in loop 
 
// for(let key in person)
 
// console.log(person[key]);
//     console.log(`${key} : ${person[key]}`);
// }


// objects.keys
// console.log(Object.keys(person));

for(let key of Object.keys(person))
{
    console.log(person[key])
}