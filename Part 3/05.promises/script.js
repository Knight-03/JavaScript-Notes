// Promise : it represent the future value which we don't know rn but we'll get to know it  
console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];

const friedRicePromise = new Promise((resolve,reject) => {
    // resolve : if the promise is resolved
    // reject : if the promise is rejected
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedRice"});
    }
    else{
        // reject(new Error("something missiong from bucket"));
        reject("could not do it");
    }
})
// Produce kr liya promise 
// now consume 
// how to consume 

// we can pass two call back function in .then 
// friedRicePromise.then(
    // jab promise resolve hoga 
//     (myfriedRice)=>{
//         console.log("lets eat ", myfriedRice);
//     }
//     ,
    //jab promise reject hoga
//     (error)=>{
//         console.log(error);
//     }
// )

//* then vadu kaam browser kare che 
friedRicePromise.then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })

// * Promise pn asyncronous che matlab promise js nu nathi browser nu che 

setTimeout(()=>{
    console.log("hello from settimeout")
},1000)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")
// * promise microTask queue ma add thay 
// jo banne queue ma kaik padyu che to 
// microTask vadu pehla run thashe 
// call back queue vadu pachi 