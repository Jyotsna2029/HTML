function arr(...args){
    for(let i = 0; i<args.length;i++){
        console.log("Your gave us: ", args[i]);
    }
}
arr(8,17,3,24,1);

function min(msg, ...args){
    console.log(msg);
    return args.reduce((min, el) => {
        if(min > el) return el;
        else return min;
    });
}
min("Hello", 4,2,1,3,99,-1);