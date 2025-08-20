// map
let num = [1,2,3,4];
let double = num.map(function (elt) {return  elt*2;});
console.log(double);

// filter
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let even = nums.filter((elt) => {return elt%2==0;} );
console.log(even);