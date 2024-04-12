// problem in previous one was 
// agar hamko jyada methods rakhne h user ke to vo 
// baar baarr add karne padege dono jagha 
// what if bhul gaye function m add krna to

// const userMethods = {
//     about : function(){
//         return `I'm ${this.firstName} and i'm ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//         return "toon na na na la la";
//     }
// }
function createUser(id,firstName,lastName,email,age,address)
{
    const user = Object.create(createUser.prototype);
    user.id = id;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
// console.log(createUser.prototype)
// aapdne function aa free space matlab object apyu che vaparava to aa use karishu 
// apde instead ke ek new object userMethods banava ni jagya a

const user1 = createUser(1,"Knight","Kittu","Knight@gmail.com",18,"My address")

createUser.prototype.about = function(){
    return `I'm ${this.firstName} and i'm ${this.age} years old`;
}
createUser.prototype.is18 = function(){
    console.log(this.age)
    return this.age >= 18;
}
createUser.prototype.sing = function(){
    return "toon na na na la la";
}
console.log(user1) // try this on browser 
console.log(user1.about());
console.log(user1.is18());
// console.log(user1.is18());
// __proto__ ek referece che 
// prtotype ek object che 