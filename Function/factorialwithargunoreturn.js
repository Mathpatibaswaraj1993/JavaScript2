function factorial(num){

let a = 1;
for (let i=1; i<=num;i++){
    a *= i;
}
console.log(`Factorial of ${num} is ${a}`)

}

let num = parseInt(prompt("Enter a Number"))
factorial(num)