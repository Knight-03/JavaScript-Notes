// const user1 = {
//     id: '1',
//     firstName: "Knight",
//     lastName: "Rumble",
//     email: "knight.rumble@gmail.com",
//     age : 5,
//     address : "A - 134 Radhe",
//     about: function(){
//         return `I'm ${firstName} and i'm ${age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
// why create user1 user2......
// we have created an function which return an object 

// Function (that function create objects)
// 2.) add key value pair 
// 3/) object ko return krega

// problem in previous one was 
// agar hamko jyada methods rakhne h user ke to vo 
// baar baarr add karne padege dono jagha 
// what if bhul gaye function m add krna to

const userMethods = {
    about : function(){
        return `I'm ${this.firstName} and i'm ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return "toon na na na la la";
    }
}
function createUser(id,firstName,lastName,email,age,address)
{
    const user = {};
    user.id = id;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
}
const user1 = createUser(1,"Knight","Kittu","Knight@gmail.com",18,"My address")
const user2 = createUser(2,"Knight","Kittu","Knight@gmail.com",19,"My address")
const user3 = createUser(3,"Knight","Kittu","Knight@gmail.com",16,"My address")
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user1.about());
console.log(user1.is18());
