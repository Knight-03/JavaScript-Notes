// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property 

// const navItems = document.getElementsByClassName("nav-items"); // HTMLCollection
// const navItems = document.getElementsByTagName("a");
// let navItems = document.getElementsByTagName("a"); // let use karyu cuz for each loop use karva mate 
// apde ane array ma convert karishu 

// console.log(navItems);
// console.log(navItems.length);
// we can't use forEach method to iterate through HTMLCollection
// simple for loop 
// for of loop 
// forEach 

// for(let i=0; i<navItems.length;i++)
// {
    // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color  = "green";
//     navItem.style.fontWeight = "bold";
    // white thai jase pn green nai thai shake cuz m "a" tag ni ander home todo ..etc lakhyu che 
    // we need to get the that 
    // changing getElementsByclassName ni jagya aa 
    
// }

// for(let navItem of navItems)
// {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color  = "green";
//     navItem.style.fontWeight = "bold";
// }



// it will give typeerror 
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// navItems = Array.from(navItems);

// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })



let navItems = document.querySelectorAll("a"); // Nodelist
navItems = Array.from(navItems);
console.log(Array.isArray(navItems))
// simple for loop 
// for of loop 
// forEach 


// for(let i=0; i<navItems.length;i++)
// {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color  = "green";
//     navItem.style.fontWeight = "bold";
    
// }

// for(let navItem of navItems)
// {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color  = "green";
//     navItem.style.fontWeight = "bold";
// }

navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})
