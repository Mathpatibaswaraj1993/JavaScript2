// document.write("<table align='center' cellpadding=6 border=3 width='300px'><tr><th>Roll No</th> <th>Student Name</th><th>ma</th><th>m2</th><th>m3</th><th>Total</th><th>Avg</th></tr>")

// document.write(`<tr><td>${rno}</td><td>${studentname}</td><td>${m1}</td><td>${m2}</td><td>${m3}</td><td>${total}</td><td>${avg.toFixed(2)}</td></tr></table>`)



let circle = parseFloat(prompt(" Enter the radius of circle:"));
let aoc=3.14*circle
// document.write(`Area of circle ${circle.toFixed(2)}`)

let cirum = parseFloat(prompt("Enter the radius of cirum:"))
let aot =3.14*cirum
// document.write(`Area of cirumference ${cirum.toFixed(2)}`)


let base = parseFloat(prompt("Enter the base of Triangle:"))
let height =parseFloat(prompt("Enter the height of the Triangle"))
let area = 0.5 * base* height;

// document.write(`Area of the triangle is ${area.toFixed(2)}`);

let length =parseFloat(prompt("Enter the length of the rectangle:"))

let width =parseFloat(prompt("Enter the width of the rectangle:"))

let area1 = length * width;

document.write("<table align='center' color:gray cellpadding=6 border=3 width='300px'><tr><th>Area of Circle</th><th>Area of Cirumference</th><th>Area of Triangle</th><th>Area of Rectangle</th></tr>")


document.write(`<tr><td>${aoc}</td><td>${aot.toFixed(2)}</td><td>${area.toFixed(2)}</td><td>${area1.toFixed(2)}</td></tr></table>`)

// document.write(`Area of the rectangle is:${area1.toFixed(2)}`)



