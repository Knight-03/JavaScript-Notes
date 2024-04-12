// iterables
// jispe hum for of loop laga shake 
// string , arrray are iterable 

// const firstname = "Knight"
// for(let char of firstname)
// {
//     console.log(char);
// }

// const items = ["item1","item2","item3"]
// for(let item of items)
// {
//     console.log(item);
// }

// const users = {'key1' : "value1", "key2": "value2"}
// for (let key of users) {// for of loop gives error thats why 
    // objects are not iterables 
//     console.log(key, users[key]);
// }

// array like object 
// jinke pas length property hoti h 
// aur jinko hum index se access kr sakte h 
// example : string 
const str = "Hello World"
console.log(str.length)
console.log(str[8])