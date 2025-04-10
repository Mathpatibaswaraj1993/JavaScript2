// let h3 = document.querySelector("h2")

// console.dir(h3.innerText)

// h3.innerText = h3.innerText + " from Apna College"


let divs = document.querySelectorAll(".box");

let idx =1;
for (div of divs)
{
div.innerHTML =`new unique value ${idx}`
idx ++;
}
