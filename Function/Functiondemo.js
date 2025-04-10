//what is function ?
// function is a block of code to perform the specific task.

function fun() //    defination 
{
      alert (" i am in fun block")
      fun1()

}

function fun1() //    defination 
{
      alert (" i am in fun1 block")
      fun2() 

}
// fun()           //function calling


function fun2() //    defination 
{
      alert (" i am in fun2 block")
}


alert("i am in fun inside fun")

fun()     

console.log("i am outside fun")
