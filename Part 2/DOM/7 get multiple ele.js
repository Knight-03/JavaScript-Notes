// get multiple elements using getelements by class name 
// get multiple elements items using queryselectorAll

// const navItems  = document.getElementsByClassName("nav-items"); // HTMLCollection return kare 
// console.log(typeof navItems) // array like object che ..  array nathi 
// console.log(Array.isArray(navItems))

const navItem = document.querySelectorAll(".nav-items") //NodeList return kare che 
console.log(navItem[3]) 