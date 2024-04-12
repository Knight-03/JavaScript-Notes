// methods 
// function inside object 

function userInfor(){
    console.log(`I am ${this.firstName} and my age is ${this.age}`);
}
const user = {
    firstName : "Knight",
    age : 18,
    about: userInfor
};
const user1 = {
    firstName : "Zer",
    age : 8,
    about: userInfor
};
const user2 = {
    firstName : "kit",
    age : 19,
    about: userInfor
};

user.about()
user1.about()
user2.about()
