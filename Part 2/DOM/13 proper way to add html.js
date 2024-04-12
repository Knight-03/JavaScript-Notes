// document.CreateElemetn()
// append
// prepend
// remove 

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach students");
// // newTodoItem.append(newTodoItemText);

// newTodoItem.textContent = "Teach Students";
// // console.log(newTodoItem)
// const todoList = document.querySelector(".todo-list");
// // todoList.append(newTodoItem)
// todoList.prepend(newTodoItem) // pehla add kare append pachad add kare 

// const todo1 = document.querySelector(".todo-list li");
// console.log(todo1);
// todo1.remove();

// * Before After 


// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teache Students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teache Students";
const todoList = document.querySelector(".todo-list");
todoList.after(newTodoItem);

