let size = "XL";
console.log(`You asked for size ${size}`);
if(size == "XL"){
    console.log("You have to pay Rs.250.")
}
else if(size == "L"){
    console.log("You have to pay Rs.200.")
}
else if(size == "M"){
    console.log("You have to pay Rs.100.")
}
else{ //small
    console.log("You have to pay Rs.50.")
}