// static list vs live list

// querySelectorAll hame static list degi
// getElemetnbySomething hame live list degi 

// * querySelectorAll hame static list degi

// const listItem = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItem); //NodeList(5) [li, li, li, li, li]
// 6th add karyo toye 5 j batave che 



// * getElemetnbySomething hame live list degi 

const ul = document.querySelector(".todo-list");
const listItem = ul.getElementsByTagName("li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
ul.append(sixthLi);
console.log(listItem); //HTMLCollection(6) [li, li, li, li, li, li]
