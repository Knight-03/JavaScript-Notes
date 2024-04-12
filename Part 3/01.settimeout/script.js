let btn = document.querySelector(".btn");
let box = document.querySelector(".container");

btn.addEventListener('click', () => {
    box.classList.add("black");

    setTimeout(() => {
        box.classList.remove("black");
        console.log(box);
    },500);
});