// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName()); // aa rite lakhiye to j akhu naam made che 
//   pan mare breckets use nathi karva to just write get before fullname
//  fullname is method but cuz of get we can use it like property just the way we use
// person1.firstName 

console.log(person1.fullName);
person1.fullName = "mohit vashistha";
console.log(person1);