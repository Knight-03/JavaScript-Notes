// into to events 
// click

// event add karne ke 3 tarike hai 

// 1.) direct html element ma onclick nakhi shakiye 

// 2.) 
// const btn = document.querySelector(".btn-headline");
// console.log(btn);
// btn.onclick = function(){
//     console.log("clicked");
// }
// aama click event ek thi vadhar var assign na kari shakiye atle saro nathi 

// 3.) method ---- addeventListener

const btn = document.querySelector(".btn-headline");
// function clicked(){
//     console.log("you clicked me !!!");
// }
// btn.addEventListener("click",function() {
//     console.log("you clicked me !!!");
// });
btn.addEventListener("click",() =>{
    console.log("arrow function!!!");
});
 