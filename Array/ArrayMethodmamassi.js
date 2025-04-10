let courses = ["Java","Python","Mean","Mern","Androd","Php"]

let coursename = prompt("Enter course Name")

let index = courses.indexOf(coursename.toLowerCase())
if(index == -1)
{
    console.log(`${coursename} is not present in an array`)
}
else{
    console.log(`${coursename} is  present ${index}  location`)

}