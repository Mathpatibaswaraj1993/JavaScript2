let rno = prompt("Enter roll no")
let studentname = prompt("Enter student Name")
let m1 = parseInt(prompt("Enter marks of m1"))
let m2 = parseInt(prompt("Enter marks of m2"))
let m3 = parseInt(prompt("Enter marks of m3"))
let total = m1+m2+m3
let avg =total/3






document.write("<table align='center' cellpadding=6 border=3 width='300px'><tr><th>Roll No</th> <th>Student Name</th><th>m1</th><th>m2</th><th>m3</th><th>Total</th><th>Avg</th></tr>")

document.write(`<tr><td>${rno}</td><td>${studentname}</td><td>${m1}</td><td>${m2}</td><td>${m3}</td><td>${total}</td><td>${avg.toFixed(2)}</td></tr></table>`)


