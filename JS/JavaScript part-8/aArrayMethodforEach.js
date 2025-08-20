let arr = [1,2,3,4,5];
// forEach
let print  = function(elt){
    console.log(elt);
}
arr.forEach(print);

// for each instad of print
arr.forEach(function (elt){
    console.log(elt);
});

// for each for objects
let a = [{
    name:"A",
    marks:"94"
},
{
    name:"B",
    marks:"91"
},
{
    name:"C",
    marks:"98"
}];
console.log(a);
a.forEach((student) =>{
    console.log(student.marks);
});