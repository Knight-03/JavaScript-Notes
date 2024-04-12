// find Method 

// const list = ["Hello", "cat", "dog", "lion"]

// function islen(String) {
//     return String.length === 3;
// }

// const ans = list.find((islen)=> {
//     return islen.length === 3;
// })
// console.log(ans)
const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const ans = users.find((user) => {
    console.log(user)
    return user.userId === 3
})
console.log(ans)