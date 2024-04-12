// fetch

const URL = "https://jsonplaceholder.typicode.com/postss";
// const whatisthis = fetch(URL); // * return promise we can use then method
// console.log(whatisthis);

// fetch(URL)
//     .then(Response => {
// console.log(Response.json()); // returns promise
//         console.log("then") // even if apdi url khoti che then to chale che
//         if(Response.ok){

//             return Response.json();
//         }
//         else{
//             throw new Error("somet thing went wrong");
//         }
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log("inside catch block");
//         console.log(error);
//     })

fetch(URL, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong!!!");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("inside catch");
    console.log(error);
  });
