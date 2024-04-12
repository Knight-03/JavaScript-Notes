/*
// callback function 
function myFunc2(another_callback)
{
    console.log("inside myFunc2")
    // another_callback(myFunc);
}

function myFunc(callback) //callback ma akhu myFunc2 che (print it) aane j call back funtion kevay
{
    callback(myFunc); // muFunc2 ma je che aa print thai jashe 
    console.log(callback)
    console.log("inside myFunc")
}

myFunc(myFunc2) //ek function ne call krti vakhte bija function ne pass karyu as an argument 
*/

// Function Return Function 

function myFunc() {
    
    function hello(){
        return "hello world"
    }
    return hello;
}
const ans = myFunc();
console.log(ans());