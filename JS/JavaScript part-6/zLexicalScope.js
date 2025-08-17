// lexical scope
function outerFun (){
    let x = 5;
    let y = 6;
    function innerFun(){
        console.log(x);
        console.log(y);
    }

    innerFun();
}
outerFun();

// possible because of hoisting
function outerFun (){
    function innerFun(){
        console.log(x);
        console.log(y);
    }
    let x = 5;
    let y = 6;
    
    innerFun();
}
outerFun();
