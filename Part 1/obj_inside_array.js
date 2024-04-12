//object insider the array 
const users = [
    {userId:1, firstname:'K', sex:'female'},
    {userId:2, firstname:'L', sex:'other'},
    {userId:3, firstname:'Z', sex:'male'},
]

// for(let user of users)
// {
//     console.log(user.firstname);
// }

//nested destructuing 
const [user1,user2,user3] = users;
// console.log(user1,user2,user3)

const [{firstname:user1firstname}, , {sex:user3sex}] = users;
console.log(user1firstname);
console.log(user3sex);
