const student = {
    name: "Jyotsna",
    age:21,
    SC:95,
    CV:93,
    SE:94,
    CN:98,
    Crypto:94,
    getAvg(){
        let avg = (this.SC+this.CV+this.SE+this.CN+this.Crypto)/5;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};

console.log(student);
console.log(student.getAvg());

function get(){
    console.log(this);
}
get();