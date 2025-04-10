let students = [['David',80] ,['Vinod',88] ,['Divya',68], ['Mary', 78], ['John',92]];


let Avgmarks =0;


for (let i=0;i<=students.length;i++)
{
    Avgmarks += students [i][i];

    var avg =(Avgmarks /students.length);
}


console.log(`Average grade :+${(Avgmarks) / students.length}`)

if(avg <60)
{
    console.log("Grade : F")
} else if(avg <70){
    console.log("Grade : D")

}else if(avg <80){
    console.log("Grade : C")

}else if(avg <90){
    console.log("Grade : B")

}
else if(avg <100){
    console.log("Grade : A")

}else{
    console.log("Failed!!!")
}

