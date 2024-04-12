// little practice with click event 

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
    button.addEventListener("click",(e)=>{
        let buttonText = e.target;
        buttonText.style.backgroundColor = "yellow";
        buttonText.style.color = "gray";
    })
});
