// object destrucuting 
const band= {
    bandName : "The Police",
    famousSong: "every breath you take",
    year : 1969

};

// const var1 = band.bandName;
// const var2 = band.famousSong;
 
// let {bandName,famousSong} = band;
// bandName = "queen"; // will give error as its const 
// console.log(bandName);


let {bandName:var1,famousSong:var2,...restProps} = band;
// var1 = "queen"; // will give error as its const 
console.log(var1); // the police
console.log(restProps); // object 
 