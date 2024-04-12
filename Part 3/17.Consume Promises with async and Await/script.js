// async await

// fetch(URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
console.log("script start");
const URL = "https://jsonplaceholder.typicode.com/posts";

//* async lagayu atle aa function hamesa promise return karshe
// async function getPosts(){
//     const response = await fetch(URL);

    // * await wait karshe fetch na resolve or reject thavano 
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json(); 
//     return data;
// }    
// const returned = getPosts();
// console.log(returned); // aa to promise j madse to solve that 

// another method to define asycn
const getPosts = async() =>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    return data;
}

// const myData = getPosts();
// console.log(myData);

getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch(error =>{
        console.log("inside catch")
        console.log(error);
    })


console.log("script end ");