
function evenoroddNumber(){
    
    let num = parseInt(prompt("Enter a number between 1 and 30:"));

    if (num >= 1 && num <= 30) {
        for (let i = 1; i <= num; i++) {
            if (i % 2 === 0) {
                console.log(i + " is even");
            } else {
                console.log(i + " is odd");
            }
        }
    } else {
        console.log("Please enter a number between 1 and 30.");
    }
    
}  
 evenoroddNumber()

// function factorial (){
//     let num = parseInt(prompt("Enter a Number"))
//     let fact =1;


//     for (let i=1; i<=num;i++)
//     {
//         fact *= i;
//     }
//     console.log(`Factorial of ${num} is ${fact}`)
// }

// factorial();


// function fizzbuzz()
// {
//     for (let i=1;i<=50;i++)
//     {
//          console.log(`${i}`)

//       if   (i %  3=== 0 || i %  5=== 0)     
//                {
//                 console.log(`Fizz buzz!!`)
//                }
//         else if(i % 3===0)
//             { 
//             console.log(`fizz`)
//         }
//         else if(i% 5 ===0)
//         {
//             console.log(` buzz!!`)
//         }
    
//         else{
//             console.log(`number!!`)
//         }
//     }
// }
// }

// fizzbuzz()

// function Multi()
// {

//     let mul = parseInt(prompt("Enter a number "))

//     for (let i=1;i<=10;i++)
//         console.log(`Multiplication ${mul} * ${i} = ${mul * i}`)

// }
// Multi()

// function vowels()
// {
//    let inputString = prompt("Enter a String ")
//    let count = 0;
//    let vowels ="aeiouAEIOU";

//    for (let char of  inputString )
//    {
//     if(vowels.includes(char))
//     {
//         count++;
//     }
//    }
//    console.log(`Number of vowels in the string:${count}`)
// }

// vowels()

// function largestno()
// {

//     let numbers = parseInt(prompt("Enter a Number "))
//     let arr=[];
//     if (arr.length === 0)
//     {
//        return "Array is Empty"
//     }

//     let largest = arr[0]

//     for (let i=1;i<arr.length;i++)
//     {
//         if(arr[i]>largest)
//         {
//             largest=arr[i];
//         }
//     }
//     return largest;
//     console.log(`Largest Number:, find largestNumber ${numbers}`)
// }
// largestno()