const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) =>{
    // console.log("Form SUbmitted") // page refresh thai jaay che 
    e.preventDefault(); // page refresh nai kare 
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;

    newLi.innerHTML = newLiInnerHtml;
    // console.log(newLi);
    todoList.append(newLi);
    todoInput.value = "";
})

todoList.addEventListener("click", (e) => {
    // check if user clicked on done button 
    if (e.target.classList.contains("done")) {
        // console.log(e.target);
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
})