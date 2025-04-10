// Dom Methods -- Accessing or manipulate Html elements

function fun(){
    var para = document.getElementById("p1").innerHTML
    alert (para)

    var hed=document.getElementById("hed").innerText
    alert(hed)

    var para1 = document.getElementById("p2").innerHTML
    alert(para1)

    var hed2= document.getElementById("hed1").innerText
    alert(hed2)
}

function fun1()
{

    var txt="Document Object Model"
    document.getElementById("hed").innerHTML=txt
}


function fun2(){
    // var  txt1="Document Examples"
    document.getElementById("hed").innerHTML="Document Examples"
}