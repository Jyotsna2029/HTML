console.log("ques1");
function ArrElementGreaterThanNum(num, arr){
    for(let i = 0; i< arr.length; i++){
        if(num <= arr[i]) console.log(arr[i]);
    }
    
}
const arr = [2,3,1,9,7,5];
let num = 4;
ArrElementGreaterThanNum(num,arr);

// ques 2
console.log("-------------------------------------");
console.log("ques2");

function uniqueStr(str){
    let ans = "";
    for(let i = 0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) ans += currChar;
    }
    return ans;
}

let str ="abcdabcdefgggh";
console.log(uniqueStr(str));
console.log("-------------------------------------");
console.log("ques3");
const country = ["Australia", "Germany", "United States of America"]
function longestName(country){
    let ansIdx = 0;
    for(let i = 0; i<country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen>ansLen) ansIdx = i;
    }
    return country[ansIdx];
}
console.log(longestName(country));
console.log("-------------------------------------");
console.log("ques4");
let s = "apnacollege"
function countVowel(str){
    let count = 0; 
    for(let i = 0; i<s.length; i++){
        if(s.charAt(i) == 'a' ||
        s.charAt(i) == 'e' ||
        s.charAt(i) == 'i' ||
        s.charAt(i) == 'o' ||
        s.charAt(i) == 'u'){
            count++;
        }
    }
    return count;
}
console.log(countVowel(s));

console.log("-------------------------------------");
console.log("ques4");

let start =100;
let end = 200;
function generateRandom(start,end){
    let diff = end - start;
    return Math.floor(Math.random() * diff)+ start;
}
console.log(generateRandom(start, end));