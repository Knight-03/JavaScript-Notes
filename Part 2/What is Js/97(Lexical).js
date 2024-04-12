// lexical environment, scope chain

const lastName = "Vashistha";

const printName = function(){
    const firstName = "harshit";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName();

// last name to local memory ma che j nai 
// to js jashe ena parents jode 
// lexical environment ma joshe
// lexcial environment atle apdi game te vashtu kya present che 
