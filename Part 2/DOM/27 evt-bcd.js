
const body = document.body;
const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// * Capturing Eents 
// child.addEventListener("click",() =>{
//     console.log("Capture child!!");
// }, true);

// parent.addEventListener("click",() =>{
//     console.log("Capture parent!!");
// }, true);

// grandparent.addEventListener("click",() =>{
//     console.log("Capture garndparent!!");
// }, true);

// body.addEventListener("click",() =>{
//     console.log("Capture body!!");
// }, true);

//* Normal Events 
// child.addEventListener("click",() =>{
//     console.log("Bubbling child!!");
// });

// parent.addEventListener("click",() =>{
//     console.log(" Bubbling parent!!");
// });

// grandparent.addEventListener("click",() =>{
//     console.log(" Bubbling garndparent!!");
// });

// body.addEventListener("click",() =>{
//     console.log("Bubbling body!!");
// });

// * U shape ma work thashe 
// pehla captureing and pachi bubbling 

// * ek event ne call karyu and ena parent pr event lagegi che to 
// * to aa call thai jaay ene j **Event Bubbling / Event Propogation** kevay 

// jyare child pr click karishu to parent par jate j click thai jase 
// browser check karse ke su parent pr aavi koi evnet add kareli che ke nai 
// jo kareli hase to browser jate j aa function ne call back kari lese 

// * Event Delegation

// grandparent.addEventListener("click",() =>{
//     console.log("you clicked on something"); // ama agar child pr click akrishu toye aa print thaseh 
    // apde to gradparent pr lagai che event pn toye 
    // U shape ma check thashe koi 
    // *capture event nathi to child thi bubble start thshe 
    // aa check karse ena parent ma ena grandparent ma event che ha che to enu call back funtion call thai gyu 
    // *capture event nathi to child thi bubble start thshe 
    // aa check karse ena parent ma ena grandparent ma event che ha che to enu call back funtion call thai gyu
    // see PNG
// })
// mare to akla child pr jotu tu 
// * here comes Even Objects ****

grandparent.addEventListener("click",(e) =>{
    console.log(e.target);
})