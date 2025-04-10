// // let numbers =[2,3,4,5,6,7,8,9]

// // let fruits = ["apple","banana","mango","kiwi","cheery"]


// // //  numbers.forEach((e)=>{
// // //     console.log(e*3)
// // //  })

// //  let newArray1=numbers.map((e)=>{
// //     return e*3
// // })
// // console.log(newArray1)

// // //  let newArray2 = fruits.map((e)=>{
// // //     return e.toUpperCase()
// // //  })
// // //  console.log(newArray2)


// // // let newArray3 = fruits.map((e)=>{
// // //     return e.length
// // // })

// // // console.log(newArray3)


// // // let  number2 = [1,2,3,4,5]

// // // let doublenumber = number2.map(num => num * 2)

// // // console.log(doublenumber)




// // let names = ["alice", "bob", "john","blake","charlie"]

// // let upeername = names.map(names => names.toUpperCase())
// // console.log(upeername)



// // // console.log(names.indexOf("alice"));

// // // console.log(names.indexOf("blake"));

// // console.log(names)
// // let arr1;
// // let arr = fruits.map((names, index)=>({
// //    arr1 ,index
// // }))
// // console.log(arr);



// let words = ["hello", "world","javascript"]

// let upperCasewords = words.map(word=>word.toUpperCase())
// console.log(upperCasewords)



// let users = [{id : 1,name :"Alice"},
//    {id : 2,name :"Bob"},
//    {id : 3,name :"John"},
//    {id : 4,name :"Charlie"},
//    {id : 5,name :"Blake"},
//    {id : 6,name :"Julie"},
//    {id : 7,name :"Nadita"}
// ];


// let username = users.map(user => user.name);
// console.log(username);



// let priceInUSD = [10,20,30,40]

// let priceInINR = priceInUSD.map(price => price * 83);
// console.log(priceInINR);


// let fruits = ["Apple","Banana","Cherry"];

// let tasty = fruits.map(fruit => fruit + " = is tasty");
// console.log(tasty);


let items= ["pen","Notebook","Ball","Pencil"]

let allitems = items.map((item ,index)=>`${index + 1}.${item}`) 
console.log(allitems);