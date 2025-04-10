// Filter --methods always return a new array containing elements that satisfy a given condition 



let numbers = [34,44,56,77,88,98,11,7]

// // Wap to print only even numbers array from given array

// let filteredArray = numbers.filter((e)=>{
//     if(e%2==0){
//         return e
//     }
// })
// console.log(filteredArray)


// let filteredArray = numbers.filter(e=>e%2==0)
// console.log(filteredArray)


// let names = ["john","Blake","scott","joe","Mumbai","Bangaluru","udgir"]

// let newArray = names.filter((e)=>e.length>4)
// console.log(newArray)


// let newArray1 = names.filter((e)=>e!="scott")
// console.log(newArray1)


//Reduce -- Method reduces an array and returns a single value by applying a function iteratively


let values = [2,34,55,67,8,9,10,11]

let sumofnumbers =values.reduce((sum,e)=>sum+e,0)
console.log(sumofnumbers)
