let btn = document.querySelector(".btn");
let box = document.querySelector(".container");
let intervalId;
let flag = 0;


btn.addEventListener('click', () => {
    if(flag == 0)
    {
        intervalId = setInterval(() => {
            box.classList.toggle("black");
        },500);
        btn.innerHTML = "Stop";
            flag = 1;
    }
    else{
        clearInterval(intervalId);  
        btn.innerHTML = "Start Changing!!!";
        flag = 0;
    } 
});
