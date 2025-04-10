// Replace 3 Element with new Elements from an Array

let courses = ["C","Java","Mern","Mean","Python","Andriod"]

// courses.splice(1,3)
let newcourse =["swfit","Go","Kotlin"]
 courses.splice(2,3,...newcourse);

console.log(courses)