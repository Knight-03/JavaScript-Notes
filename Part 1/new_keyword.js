// new keyword
function createUser(firstName,age){
    this.firstName = firstName
    this.age = age
}

createUser.prototype.about = function(){
   return ("I am " + this.firstName + " and I am " + this.age + " years old")
}
const user1 = new createUser("Knight",19)
console.log(user1.about())

// new keyword 
// 1.) empty object create kr ra 
// and aa empty object ni value this che matlab this refere kare che 
// empty obj ne ==> this = {}

// 2.)  return this

// 3.) je kaaam apde mannually kari rya ta 
//  Object.create(createUser.prototype); 
// new keyword __proto__ ni value ne prototype ne equal set kari deshe 


// constructor function cuz vo construct krke de ra hamko ek obj
// and bijo koi apdo code use kare ene smj pade ke "new" no use kari ne call karvanu che ena mate 
// apde function no first latter capital rakhishu 
function CreateUser(id,firstName,lastName,email,age,address)
{
    // * aa 2 comment karela kaam new keyword jate kari dese
    // const user = Object.create(createUser.prototype);
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return user;
}
CreateUser.prototype.about = function(){
    return `I'm ${this.firstName} and i'm ${this.age} years old`;
}
CreateUser.prototype.is18 = function(){
    console.log(this.age)
    return this.age >= 18;
}
CreateUser.prototype.sing = function(){
    return "toon na na na la la";
}

const user2 = new CreateUser(1,"Knight","Kittu","Knight@gmail.com",18,"My address");
console.log(user2)
