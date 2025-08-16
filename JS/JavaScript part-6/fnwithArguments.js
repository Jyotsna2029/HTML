function print(name){
    console.log(name);

}
print("Sharadha");

// sum
function sum(a,b){
    console.log(a+b);
    return a+b;
}
sum(59999,211111);
sum(sum(1,2), 3);
// average
function average(a,b,c){
    console.log((a+b+c)/3);
}
average(1,2,3);

// table 
function table(num2){
    for(let  i = 1; i <= 10; i++){
        console.log(`${num2} x ${i} = ${num2*i}`);
    }
}
table(50);

