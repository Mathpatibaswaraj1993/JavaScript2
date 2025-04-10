function gcd(){




let a = parseInt(prompt("First number"))
let b = parseInt(prompt("second number"))

let gcd;

while (a !=b)
{
    if(a>b)
    {
      a=a-b;
    }
    else
    {
        b=b-a
    }
}
gcd= a;
console.log(gcd)

}

gcd()