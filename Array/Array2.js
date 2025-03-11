//Wap to print addition of even and odd numbers from an array 

let numbers=[34,56,78,99,12,57,23,33,100]

let esum=0;
let osum=0;

for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]%2==0){
        esum =esum + numbers[i]
    }
    else{
        osum = osum + numbers[i]
    }
}
// console.log(`Even Numbers Addition:-${esum}`)
// console.log(`odd Numbers Addition:-${osum}`)
document.writeln(esum + "<br>")
document.writeln(osum)