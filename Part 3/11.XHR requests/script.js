// *xmlHTTPrequest = XHR
const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
// console.log(xhr);
 
// step1
// console.log(xhr.readyState);  
 
xhr.open("GET",URL);

// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         // console.log(xhr.response);
//     }
// }

// xhr.send();

xhr.onload = function(){
    // console.log(xhr.readyState)
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();