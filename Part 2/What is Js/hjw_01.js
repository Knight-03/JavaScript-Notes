// compilation 
// code execution
// js synchronous programming and signle threaded language che 
// matlab jya sudhi 1st line execute thay che tya sudhi biji nai thay 


// how compilation : 
// 1) tokenizing/lexing : chote chote tukdo m tod dete h code ko un 6ote 6ote chunks ko bolte h tokens
// lexical (lexing) determine ke tame code lakyo to kya lakhyo 
// matlab koi function ma che globally che aa badhu 
// 2) parsing : chunks ko smj ke AST(Abstract Sytax tree) bane 
// 3) code generation : executable code bane 

// why compilation  
// 1) Early Error checking 
// 2) Determining appropriate scope of varibale ( ana mate  parse karvu j pade )

// ---------------------

// How javascript code executes 
// in js code exectues inside exection context
// what is global exection context ? 
    // - stack ma add thay 
    // - creation Phase 
        // - window object  
        // - global object
        // - this  window object pr set thay 
    // var varibales undefine set thashe
    // - code execution Phase


// what is local execution context ? 
// closures
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Harshit";
console.log(firstName);


// Steps 
/*
 * Compilation - Erros & Scope  
 * Code Execution
 # In order to execture Js code 
                - Js Creates exectuion context 
                - Creation Phase -> memory Create 
                - Line by Line Code Exection 
 */