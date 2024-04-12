const mainButton = document.querySelector("button");

const body = document.body;

const currentColor = document.querySelector(".current-color");

function randomColorGenrator(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r},${g},${b})`;
    return randomColor;
}

mainButton.addEventListener("click",()=>{
    const randomColor =  randomColorGenrator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
    // console.log(randomColor);
});