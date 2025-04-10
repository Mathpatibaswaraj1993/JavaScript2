//check user defined course name is present in array or not


let courses = ["C","Java","Mern","Mean","Python","Andriod"]

let coursename = prompt("Enter course Name")

let index = courses.indexOf(coursename)
if(index == -1)
{
    console.log(`${coursename} is not present in an array`)
}
else{
    console.log(`${coursename} is  present ${index}  location`)

}