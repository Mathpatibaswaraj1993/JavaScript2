const users = [
    {uid:1,uname:'Alice',Age:25},
    {uid:2,uname:'Bob',Age:30},
    {uid:1,uname:'Charlie',Age:12},
    {uid:4,uname:'Diana',Age:28},
    {uid:3,uname:'Ethan',Age:34},
    {uid:6,uname:'Fiona',Age:27},
    {uid:4,uname:'George',Age:31}
]

// console.log(users)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const adultUsers = users.filter(users => users.Age >= 18);
// console.log(adultUsers)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const ages= [23,22,32,15,32,33]
const total = ages.reduce((sum,age)=> sum + age, 0);
const average = total + ages.length;
// console.log(`Average age :${average}`);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const unique= Array.from(
//     new Map(users.map(users=>[users.uid,users])).values()
// );
// console.log(unique)

//show all users

 const user2 = users.map(user =>`uid:${user.uid},Uname:${user.uname},Age:${user.Age}`)
console.log(user2)

// console.log(users)