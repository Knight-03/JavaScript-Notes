// Maps
// map is an iterable 
// store data in ordered fashion 

// store key value pair (like objects)
// duplicated key are not allowed like objects 

// different between map and object

// objects can only have string or symbol as key 
// in maps you can use anyhthing as key 
// like array , numbers, string 


// below code is also known as object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstNmae : "Knight",
//     age : 19,
//     1 : 'one',
// }
// console.log(person.firstNmae)
// console.log(person["firstNmae"])
// console.log(person[1]) // aa le to string ma j che person['1']
// for(let key in person)
// {
//     console.log(typeof key) // badhi key string ma j hoy che 
//     // most of the time key can be symbol also 
// }


// key value pair 
// const person = new Map(); 
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1))
// console.log(person.get('firstName'))

// for(let key of person.keys())
// {
//     console.log(key,typeof key)
// }

// for(let [key , value] of person)
// {
//     console.log(key,typeof key)
//     console.log(Array.isArray(key)) // true
// }
const person1 = {
    id: 1,
    firstName: "harshita"
}
const person2 = {
    id: 2,
    firstName: "harsh"
}
const extraInfor = new Map()
extraInfor.set(person1 , {age : 19, geneder : "female"})
extraInfor.set(person2 , {age : 18, geneder : "male"})
console.log(extraInfor)
console.log(extraInfor.get(person1).age)
console.log(extraInfor.get(person2).age)
