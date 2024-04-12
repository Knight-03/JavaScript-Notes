// 2015 / es6 
// class keyword
// class are fake in js 
//  kaam to aanu aaj thay che bas feel aave che ke class use kariye 6iye
// cpp , java ni jem 

class CreateUser{

    constructor(firstName, lastName, email, age, address){
        console.log("constructor called")
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    is18(){
        return this.age >= 18; 
    }
    sing(){
        return "la la la la";
    }
    fun(a){
        console.log(a);
    }
}

const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// console.log(user1)
console.log(Object.getPrototypeOf(user1)); //  check on browser
user1.fun(14)