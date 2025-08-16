function sum1toN(n){
    let sum  = 0;
    for(let i = 1; i<= n; i++){
        sum += i;
    }
    return sum;
}
console.log(sum1toN(10));

// block scope;
{
    let a = 25;
}
// console.log(a);    //will give error since it is not defined outside the block



