// block scope;
{
    let a = 25;
}
// console.log(a);    //will give error since it is not defined outside the block
{
    const a = 25;
}
// console.log(a);    //will give error since it is not defined outside the block
{
    var a = 25;
}
console.log(a);    //will run
 