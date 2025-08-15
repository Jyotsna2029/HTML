let student = {
    name :"shradha",
    age : 25, 
    marks :94.4, 
    city : "delhi"  
};
const item ={
    price : 100.99,
    discount : 50,
    colors : ["red", "blue"],
    offer : "Buy one get one!"
};


const threadPost = {
    username:"@shradhakhapra",
    content:"This is my #firstpost",
    likes:150,
    repost: 5,
    tags : ["apna college", "sigma"]
};

console.log(threadPost.likes);
console.log(threadPost["tags"]);

// change property
student.city = "Jaipur";
student.marks = "A";
console.log(student);

// addproperty
student.gender = "Female";
console.log(student);

// delete
delete student.age;
console.log(student);
