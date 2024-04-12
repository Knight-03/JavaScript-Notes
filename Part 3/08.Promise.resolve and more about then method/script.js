// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// myPromise.then(value =>{
//   console.log(value);
// })


// then()
// then method hamesha promise return krta h 

function myPromise(){
  return new Promise((resolve,reject)=>{
    resolve("foo");
  })
}

myPromise().then(value => {
   console.log(value)
   value += "bar";
   return value;
  //  return Promise.resolve(value); internal work 
  // agar apde return na lakhta to undefined return thai jaat jate j 
  
})
.then(value => {
  console.log(value);
})
// hence proved .then return promises 













// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//   console.log(value);
// })


// then()
// then method hamesha promise return karta hai


// function myPromise(){
//   return new Promise((resolve, reject)=>{
//     resolve("foo");
//   })
// }

// myPromise()
//   .then((value)=>{
//     console.log(value);
//     value += "bar";
//     return value
//   })
//   .then((value) =>{
//     console.log(value);
//     value += "baaz";
//     return value;
//   })
//   .then(value=>{
//     console.log(value);
//   })