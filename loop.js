for (let i = 0; i < 100; i++) {
    console.log(i);
    
}
for (const iterator of "Satyam") {
    console.log(iterator)
}
function Hello(name) {
    console.log("Hello", name);
}

Hello("satyam")

// NaN---> not a number
// Arrow function
const func1 = (X) =>{
    console.log("I am an arrow function i.e. I am a function as well as a variable", X);
}
func1(77);