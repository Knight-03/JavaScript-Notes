//lexical scope : 

//darek function ena laxical environment ma check kr she like myfun ne ena scope ma nai male to myvar to 
// aa myapp ma sodhshe ema aa nai male to global scope ma sodhshe
const myvar = "value2";
function myApp() {
    const myvar = "value1";

    function myfun() {
        const myvar = "value59";
        console.log("insider myfunc", myvar);
    }

    console.log(myvar);
    myfun();
}

myApp();