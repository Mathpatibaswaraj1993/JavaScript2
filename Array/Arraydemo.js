

// let marks=[23,35,56,78,90] //  always array index will start from 0


// console.log(` Array Length :-${marks.length}`)
// console.log(marks)
// console.log(`value: ${marks[2]}`)
// console.log(marks[1]+marks[4])

// let mixedArray =[23,"Welcome",true, 45,56,65,"hello"]
// console.log(mixedArray[5])


// let names=["john","blake","scott","martin"]

// console.log(names[2])

//WAP enter  dynamically 10 values in an array and print an array

let arr=[]

let count=prompt("Enter how many elements u wat to enter in an array")

for(let i=0;i<count;i++)
{
   arr[i]=parseInt(prompt("enter array elements"))
}
console.log(arr)


for(let i=0;i<count;i++)
{
    console.log(`Array element ${arr[i]} is present at index number${i}`)
}