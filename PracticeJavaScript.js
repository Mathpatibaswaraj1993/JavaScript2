//  let gameCounter = 100

//  ++gameCounter
// //  console.log(gameCounter)


//  console.log(2>1)
// / console.log(2>=1)
//  console.log(2<1)
// console.log(2==1)
//  console.log(2!=1)

//  console.log("2">1)
//  console.log("02">1)

//  console.log(null > 0)
//  console.log(null == 0)
//  console.log(null >= 0)


//  //=== strictly check

//  //Datatype
//  const score =100;
//  const scoreValue =100.3

//  const islogged =false
//  const outsideTemp = null
//  let userEmail;


//  const id = Symbol('123')
//  const anotherId = Symbol('123')

// console.log(id===anotherId)

// const bigNumber = 2132733861363816


//  const heros = ["shakitman","naagraj","doga"];


//  let myobj={
//     name:"hitesh",
//     age:26,
// /  }
//  //stack memory (primitive datatype) ,// Heap memory (Non primitive datatype)

// let my = "baswaraj"

/// let anothername = my

// / my ="chai aur code"

//  console.log(my)
//  console.log(anothername)

// // let userone={
//      email:"user@google.com",
//     upi:"user@ybl"
//// }

//// let usertwo = userone 

// // usertwo.email = "baswaraj@gmail.com"

//  // console.log(userone.email)
// console.log(usertwo.email)



//  let name ="baswaraj"
//  let repocount = 40
// console.log(gameName.indexOf('w'))
// console.log(gameName.toLowerCase())


// let newString = gameName.substring(0,4)

// console.log(newString)

// let anotherstring = gameName.slice(0,4)
// console.log(newString)


// let newStringOne = "    Baswaraj    "
 //  console.log(newStringOne);
//  console.log(newStringOne.trimEnd());

//  let url =  "https://support.google.com/google-ads/answer/14095?hl=en"


//  console.log(url.replace('google-ads','baswaraj'))

//  console.log(url.includes('sundar'))

// const score =400;
// console.log(score)




// const balance =new Number(100)

 // console.log(balance.toString().length)
//console.log(balance.toFixed(2))


// let otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(5))

// let hundreds =1000000
// console.log(hundreds.toLocaleString());


 // //+++++++++++++++++++++++++++ Maths ++++++++++++++++++


// console.log(Math)

// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
 // console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
 // console.log(Math.min(4,3,4,6,7,9))
// console.log(Math.max(4,3,4,6,7,9))
// let min =10;
// let max =20;

 // Dates

 // let mydate = new Date()

// console.log(mydate.toString());
 // console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// let mycreateDate1 = new Date("01-14-2025")
 // console.log(mycreateDate1.toLocaleString())


// let mytimestamp = Date.now()
// console.log(mytimestamp)
 // console.log(mycreateDate1.getTime());
// console.log(Math.floor(Date.now()/1000));


 // let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getDay())
// console.log(newDate.getMonth())
 // console.log(newDate.getDate())


// newDate.toLocaleString('default',{
//     weekday:"long",
// })

// console.log(newDate)


//  ++++++++++++++++++++++++++++ Array +++++++++++++++++++++++


 // let myarr = [1,2,3,4,5,6]
// console.log(myarr[2]);


 // let myheros =["shaktima", "naagaj"]
// console.log(myheros)


//Push

// myarr.push(7)
// console.log(myarr)
// pop
// myarr.pop()
 // console.log(myarr)

 //unshift
 // myarr.unshift(0)
 // console.log(myarr)

 //shift
// myarr.shift()
// console.log(myarr)


 // console.log(myarr.includes(9))
 // console.log(myarr.indexOf(3))
// console.log(myarr)


 // let newarr = myarr.join()
// console.log(myarr)
// console.log(typeof newarr)

 //slice ,splice
// console.log("A",myarr)

// let myn1 = myarr.slice(1,3)
 // console.log(myn1)

// console.log("B",myarr)

 // let myn2 = myarr.splice(1,3)
// console.log("C",myarr)
 // console.log(myn2)



let marvel_heros=["thor","Ironman","spiderman"]

let dc_heros=["superman","falsh","batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros)


// let allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);


// let all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros)



// let anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// let realarray= anotherarray.flat(Infinity)
// console.log(realarray)



// console.log(Array.isArray("Baswarj"))
// console.log(Array.from("Baswarj"))
// console.log(Array.from({name:"Baswarj"}))// interesting

// let score1 =100
// let score2 =200
// let score3 =300


// console.log(Array.of(score1,score2,score3))


// singleton

// object literals


let mysym = Symbol("key1")
let user ={
    name:"Baswaraj",
    age:18,
    [mysym]:"mykey1",
    location:"Pune",
    email:"mathpati@google.com",
    isLoggedIn:false,
    lastLogiDays:["Monday","Saturday"]
}
// console.log(user.email)
// console.log(user["email"])
// console.log(typeof[mysym])


// user.email = "baswaraj@chatgbt.com"  //object freeze
//  Object.freeze(user)
// user.email="baswaraj@microsoft.com"
// console.log(user)

// user.greeting = function(){
//     console.log("Hello User Js")
// }
// console.log(user.greeting());

// user.greetingtwo = function(){
//     console.log(`Hello User Js ${this.name}`)
// }
// console.log(user.greetingtwo());



// let tinderUser = new Object() //singleton object


const tinderUser = {}// Non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn= false
// console.log(tinderUser)

const regularuser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname :"Baswaraj",
            lastname:"Mathpati"
        }
    }
}
// access object inside object
// console.log(regularuser.fullname.userfullname.firstname) 


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}


// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3)


// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
 

// How to check property available or not on object 

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

Promise.resolve(5)