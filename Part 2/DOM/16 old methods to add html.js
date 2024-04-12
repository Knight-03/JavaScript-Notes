// Some old method to support poor IE
// appendChild
// insertBefore;
// replaceChild
// removeChild;

const ul = document.querySelector(".todo-list");

// new element
const li = document.createElement("li");
li.textContent = "New Todo";

const referenceNode = document.querySelector(".first-todo");
// // ul.appendChild(li);
// ul.insertBefore(li,referenceNode);

// ul.replaceChild(li,referenceNode); 
ul.remove(referenceNode); 