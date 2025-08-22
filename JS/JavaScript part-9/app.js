// SELECTING ELEMENTS
// 1.by ID
let imgObj = document.getElementById("mainImg");
console.dir(imgObj);

// by ClASS
let smallImages = document.getElementsByClassName("oldImg");
for(let i = 0; i<smallImages.length; i++){
    console.log(smallImages[i]);
    // smallImages[i].src = "assets/spiderman_img.png";
    // console.log(`value of image no. ${i} is changed`);
};
let wrongClassName = document.getElementsByClassName("abc");
console.log(wrongClassName);

// by TAG name
let tagName = document.getElementsByTagName("p");
console.log(tagName);

// QuerySelector
console.dir(document.querySelector("h1")); //first
console.dir(document.querySelector("div a")); //first div ke andar anchor tag
console.dir(document.querySelectorAll("#description")); //all


