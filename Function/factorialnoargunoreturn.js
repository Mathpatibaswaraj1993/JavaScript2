function factorial (){
    let num = parseInt(prompt("Enter a Number"))
    let fact =1;


    for (let i=1; i<=num; i++)
    {
        fact *= i;
    }
    console.log(`Factorial of ${num} is ${fact}`)
}

factorial();