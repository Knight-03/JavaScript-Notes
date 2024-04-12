// element.insertAdjancentHTML(Where,html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend","<li>Before End</li>");
todoList.insertAdjacentHTML("afterbegin","<li>After Begin</li>");
