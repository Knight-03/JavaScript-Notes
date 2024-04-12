// this keyword 


const btn = document.querySelector(".btn-headline");
// console.log(btn);
// cnsole.log(this) 
// * aiya je this hashe aaaj niche arrow function ma pn hase 
// * arrow function ek level upar ma je this define che aa point kare 
btn.addEventListener("click",()=> {
    console.log("you clicked me !!!");
    console.log("value of this ");
    console.log(this)
});
// normal function banaishu to this ni value btn j hase 
// ne arrow function banai shu to this in value window object hashe 