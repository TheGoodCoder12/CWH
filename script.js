console.log("Code is running...")
// very useful in debugging

var a = prompt("Enter your number: ")
console.log("Your entered no is: " + a)

var isTrue=confirm("Are you sure you want to leave this page and blast your computer")
if (isTrue) {
    console.log("Computer is blasting")
}
else{
    console.log("Computer is not blasting")
}

document.title = "Hey this is COOL"

document.body.style.backgroundColor="rgb(25,25,25)"
document.body.style.color="white"
// This adds inline css to do so

var a=5
var b=7

console.log(a+b)
console.log(typeof a, typeof b)

// use let instead of var
// var --> global scope
// let, const --> defined in a block
//const value can't be changed

//2 types of dataTypes: Primitive and object
//Primitive-->Primary-->Ex: Null, number, string, symbol, Undefined, Boolean, BigInt
//Object-->User defined



