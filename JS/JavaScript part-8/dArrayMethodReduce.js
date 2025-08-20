let nums  = [1,2,3,4,5];
let n = nums.reduce((res, el) => (res+el));  //sum of elements of array
console.log(n); 

// max of arr using reduce
let arr = [1,4,2,6,4,7,9,3];
let res = arr.reduce((max, elt) =>{
    if(max <elt) return elt;
    else return max;
});
console.log(res);

// multiples of 10 are not
let array = [1,4,2,6,4,7,9,3];
let result  = array.every((elt) =>{elt%10 == 0;});
console.log(result);

// minimum num in arr
let ar = [1,4,2,6,4,7,9,3];
let resMin = ar.reduce((min, elt) =>{
    if(min > elt) return elt;
    else return min;
});
console.log(resMin);