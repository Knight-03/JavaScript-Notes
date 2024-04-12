// function execution context 

let foo = "foo";
console.log(foo);

function getFullName(firstName, lastName){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("harshit", "sharma");
console.log(personName); 

// Global Exection Context bane 
// jema Code Compilation(Memory creation Phase )
// code execution Phase hota h 

// js ek call stack maintain kare aa jova mate ke
// haal kayo exection context chali ryo che 
// ketli line chali gai che code aa pan stack ma hoy 

// compilation phase
    // sauthi pehla 
    // Window = {}
    // this : window
    // foo ni value pehla uninitialized rehse (cuz its let, var hot to undefined hot)
    // getFullName : akhu fun emna em store thaseh 
    // personName : uninitialized 


// exection phase 
    //1st line foo : foo 
    // 2nd line console : foo
    // 3rd line to fun che j 
    // 4th line ke che ke getFullName() function call karo 
// * jyare pan navu koi function call thashe atle navo exectuion phase banse 
// * jene function exection context kevay 
// ema pan 2 phase ma kaam thaseh 
// 1) local memory creation
// 2) Code Excetion 
    // * array like obj hoy 
    // array like object atle index hoy and length property hoy 
    // console : argument vada ma 2 str store thashe je pass kari che aa 
    // * function exection context pn stack ma save thashe 