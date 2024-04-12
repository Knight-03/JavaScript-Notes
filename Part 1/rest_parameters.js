//rest parameteres (...)

function myfun(a,b,...c)
{
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`); //vadhela gatela badha c ma jashe rest parameteres
}
myfun(3,4,5,6,67,69);

