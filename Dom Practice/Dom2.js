function add()
{
    let a =parseInt(form3.v1.value)
    let b =parseInt(form3.v2.value)
    let c = a+b
    form3.result1.value=c

    document.getElementById("res").style.color="red"
    document.getElementById("in1").style.color="green"
    document.getElementById("in2").style.color="blue"

}