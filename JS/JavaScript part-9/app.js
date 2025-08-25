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

// manipulating stylee
let links = document.querySelectorAll('.box a');
for(let i = 0; i<links.length; i++){
    links[i].style.color = "yellow";
}

// classlist
let heading = document.querySelector('h1');
heading.classList.add("green");
heading.classList.add("unline");
heading.classList.remove("unline");
heading.classList.contains("green");
heading.classList.toggle("unline");

// navigation
let h4 = document.querySelector("h4");
// parent element
console.log(h4.parentElement);

// children
let box = document.querySelector(".box");
console.log(box.children);

// pervsibling / nextsibling
let ul = document.querySelector('ul');
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

// creating element in para
let newP  =document.createElement('p');
newP.innerText("Hi, I am new Paragraph!")
let body = document.querySelector('body');
body.appendChild(newP);

//
let btn = document.createElement('button');
btn.innerHTML = "NEW BUTTON!!!";
let p = document.querySelector('p');
p.insertAdjacentElement('beforebegin', btn);
p.insertAdjacentElement('afterbegin', btn);
p.insertAdjacentElement('beforeend', btn);
p.insertAdjacentElement('afterend', btn);

// remove

btn.remove();