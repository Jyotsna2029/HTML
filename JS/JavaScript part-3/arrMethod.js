let car = ['Audi','BMW','Maruti', 'Nexon'];
console.log(car);
// method 1 push:add elements at the and of the arr
car.push('Porche');
console.log(car);
// method 2 pop: delete element at the end
car.pop();
console.log(car);

// method 3 unshift: add from start
car.unshift("Mercedes");
console.log(car);

// method 3 shift: delete elt add from start
car.shift();
console.log(car);

// indexof
console.log(car.indexOf('BMW'));
console.log(car.indexOf('MARUTI'));

// include
console.log(car.includes('BMW'));
console.log(car.includes('MARUTI'));


// pques
let start = ['january', 'july', 'march', 'august'];

start.shift();
start.shift();
console.log(start);

start.unshift('june');
console.log(start);  


// concat;
console.log(car.concat(start))

// reverse arr
console.log(car.reverse());


// slice arr.
let colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'white'];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));
console.log(colors.slice(6));

// splice
console.log(colors.splice(4)); 
console.log(colors.splice(0,1)); 
console.log(colors.splice(0, 1, "black", "grey")); 
console.log(colors); 


// sort arr 
console.log(car.sort());


// pques2
let months = ['jan', 'july', 'march', 'august'];
console.log(months.splice(0,1)); 
console.log(months); 
console.log(months.splice(1, 0,"june")); 
console.log(months); 

