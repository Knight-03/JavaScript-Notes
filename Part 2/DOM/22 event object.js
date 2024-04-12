// event object 

// const firstButton = document.querySelector("#one");

// firstButton.addEventListener("click",function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element pe event listerner add hogea 
// js Engine ---- line by line exectue karta h 
// browser ---- js Engine + Extra Features
// browser ---- js Engine + WebApi

// jab broswer ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ---- 2kaam karega 
// 1.) callback function hai vo js Engine ko dega.........
// 2.) callback function ke sath browser jo evne hua hai uski information bhi dega 
// vo info hame ek object ke form m milegi 


const allButtons = document.querySelectorAll(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click", function(event){
        // console.log(this.textContent);
        console.log(event.currentTarget);
    })
}