
let para = document.querySelector("p");
console.dir(para);

// innerHTML
console.log(para.innerText);
// textContent
console.log(para.textContent);
// innerHTML
console.log(para.innerHTML);


// manipulation
para.innerText = "Hey, I am peter parker";
console.log(para);


// manipulating attributes
let img = document.querySelector("img");
img.getAttributes('id');
img.setAttribute('id', 'spiderman');


// manipulating styles
img.style;
img.style.backgroundColor = "green";

let links = document.querySelectorAll('.box a');
for(let i = 0; i<links.length; i++){
    links[i].style.color = "yellow";
}

// classlist manipulation
let clsList = document.querySelector('img');  //empty vale
clsList.classList; //null since there is no class


