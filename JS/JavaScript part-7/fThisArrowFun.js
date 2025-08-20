const student = {
    name: "H",
    age:21,
    marks:94,
    prop : this,   // scope of this will be the scope of parent(that is object) == gloabl scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    // getMarks: ()=>{
    //     console.log(marks); //parent's scope hence it'll giver error
    //     return this.marks;
    // },
    getInfo1:()=>{
        setTimeout(()=> {   //arrow fun ke liye this hota hai uske parent ka this hence  that is student
            console.log(this)
        }, 2000);
    },
    getInfo2:function(){
        setTimeout(function() {
            console.log(this) //window 
        }, 2000);
    },

};
console.log(student.getName());
console.log(student.getInfo1());
console.log(student.getInfo2());
// console.log(student.getMarks());