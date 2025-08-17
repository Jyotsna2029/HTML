function multipleGreet(func, count){
    for(let i = 1; i<= count; i++){
        func();
    }
}


let greet = function(){
    console.log("Hello");
}

multipleGreet(greet, 10);


function oddEvenTest(request){
    if(request =="odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }
    else{
        console.log("wrong request");
    }
}

let request = "odd";
let tester = oddEvenTest(request);
tester(10);