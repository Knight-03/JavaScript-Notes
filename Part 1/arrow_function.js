//arrow functions
// arrow function ma this na hoy 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age); // undefined undefined 
        // cuz arrow func this apne surroundings se leta h 
        // surrounding - matlab user1 nai ena ek level up 
        // matlab window object aa arrow function ma this che 
        console.log(this) // it will give window object for this arrow function 
        // so don't make this mistake in arrow function 
    }   
}

// user1.about.call(user1) this also won't work arrow function ma this haji pn window object j hase
user1.about(user1);


