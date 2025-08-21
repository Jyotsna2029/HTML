const student = {
    name:"Preeti", 
    age:20, 
    class:10,
    subjects : ["hindi","english", "science", "sst"],
    username :"Preeti9311",
    password:"12345",
    city:"Hyderabad"
};
// let username = student.username;
// let password = student.password;

let {username, password, city = "Delhi"} = student;
console.log(username, password,city);
