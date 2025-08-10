let pencilPrice = 10; 
let eraserPrice = 5;
let totalPrice = pencilPrice+eraserPrice;
console.log("the total price is",(pencilPrice+eraserPrice),"rupees.");
console.log("the total price is "+(pencilPrice+eraserPrice)+" rupees.");
let output = `the total price is ${pencilPrice+eraserPrice} rupees.`;
console.log(output);

// if statement
if(totalPrice >10){
    console.log("If statement will work");
}
// error
console.error("This is an error!");

//alert
alert("Something is wrong!");

// prompt
let firtName = prompt("Enter your Name.");
console.log(firtName);