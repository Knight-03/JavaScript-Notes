// call apply bind 

// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }
// const user1 = {
//     firstName : "harshit",
//     age: 8,
// }
// const user2 = {
//     firstName : "mohit",
//     age: 9,
// }
// now i want to use about fun for user2 
// to do so 

// * call apply bind ==> agar tumhare pass koi function hai and koi object h and tumhe fnc chalana h aur by default jo 
// * this ki value window 
//  * naa rakh kr point karwana h kisi object ki taraf 

about.call(user2,'guitar','myself') 
// about.call(user1,'guitar','myself') 
// it will give output of mohit and 9 
// if i don't pass anything in call function and there is no this 
// it will give output of undefine undefine 


// apply 
// pela ma single mokal tata argument aama list banai ne mokliye chiye 
// about.apply(user1, ["guitar",'bach'])

//* bind returns a function 

 // const func = about.bind(user2,"guitar",'bach')
// func();
 



// if you store any function into any variable 
// like 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// const myFunct = user1.about(); 
// output will be 
// undefined undefined 
// cuz this method ke pass firstname naam ki koi property  nai h 
// hamko bind krna padega usko 
const myFunc = user1.about.bind(user1);
myFunc();