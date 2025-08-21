let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup, ...others] = names;
console.log(winner, runnerup);
console.log(others); 