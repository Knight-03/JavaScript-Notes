// promise && setTimeout 


// I want to resolve / reject promise after 2 seconds 


function myPromise(){
  return new Promise((resolve, reject)=>{
      const value = true;
      setTimeout(()=>{
          if(value){
              resolve();
          }else{
              reject();
          }
      },2000);
  }); 
}

myPromise()
  .then(()=>{
    document.querySelector("body").style.background = "blue";
    console.log("resolved")
  })
  .catch(()=>{console.log("rejected")})