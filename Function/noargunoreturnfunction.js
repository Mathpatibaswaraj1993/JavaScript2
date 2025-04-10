// no argument no return  -- 1

function greet(){
    console.log("Hello Welcome to Javascript!!!")
}
greet()


//print numbers from 1 to 5 

function printno(){
    for (let i=1; i<=5;i++)
        console.log(i)
}
printno()

// Show Current Date & Time
function showdatetime(){
    let now = new Date();
    console.log(`Current Date & Time :` + now)
}
showdatetime()

//Generate Random Number

function randomnumber(){
    console.log(`Random Number:` + Math.random(Math.random() * 100 ) )
}
randomnumber()

//Print Even Numbers from 1 to 20

function evenNumber(){
    
    let num = parseInt(prompt("Enter The Number"));
    for (let i=2; i<=num; i += 2){
        console.log(i)
    }
}
evenNumber()


