// How to get the dimension of element 

// height width 

const secitonTodo = document.querySelector(".section-todo");
const info = secitonTodo.getBoundingClientRect().height; // .heignt;
console.log(info);