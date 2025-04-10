// // no argument no return  -- addition of 2 nos 

// function add()
// {
//     let  a =parseInt(prompt("enter number1"))
//     let  b =parseInt(prompt("enter number2"))
//     let c= a+b;
//     console.log(`Addition :${c}`)

// }

// add()

//with argument but not return 
// function add1(c,d)//definition, formal parameter
// {
//     let sum =c+d;
//     console.log(`Addition :${sum}`)

// }
// let  a =parseInt(prompt("enter number1"))
// let  b =parseInt(prompt("enter number2"))

// add1(a,b)//function calling, actual parameter


// no argument but return

function add2()
{
 var a = parseInt(prompt("Enter a"))
 var b = parseInt(prompt("Enter b"))

 var c= a+b
 return c

}
var result =  add2();
console.log(result)

// To check given number is even or odd 

// function evenodd(){
//     var num=parseInt(prompt("Enter any number"))

//     if (num%2==0){
//         return "Number is Even "
//     }
//     else
//     {
//         return "Odd "
//     }
// }

// console.log(evenodd())


//with argument with return

function evenodd1(a)
{
   if (a%2==0)
   {
    return " Number is Even"
   }
   else
   {
    return " Number is odd"
   }
}
var num =parseInt(prompt("Enter any Number"))

console.log(evenodd1(num))