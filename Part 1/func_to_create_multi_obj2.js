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
    const user = Object.create(userMethods);
    user.id = id;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
const user1 = createUser(1,"Knight","Kittu","Knight@gmail.com",18,"My address")
const user2 = createUser(2,"Knight","Kittu","Knight@gmail.com",19,"My address")
const user3 = createUser(3,"Knight","Kittu","Knight@gmail.com",16,"My address")
console.log(user1.__proto__)
console.log(user1.about()); // jo user1 jode che nai pn Object.create(userMethods lakhyu che to ena __proto__ ma hase)
console.log(user1.is18());

// proto ek bond(chain) create kr ra 
// jo chez meko apne object m nai milege 
// vo kahi aur jo obj ka naam pass kiya h vaha jake dhundega 
// so relattionship establish ho gaya 