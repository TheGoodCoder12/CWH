let str = "string";
console.log(str)
console.log(str[0])
// JS is called a forgiving language as it tries to throw inimum error as possible
// it throws undefined instead of error
first_name = "Satyam";
second_name = "Shukla";
sentence = "His first name is" + first_name + "and his second name is " + second_name;
console.log(sentence)
// you cannot use , instead of + as in python
sentence2=`His first name is  ${first_name} and his second name is  ${first_name}`
console.log(sentence2)
// this is template literal and putting variable inside string is called string interpolation
// string slicing includeed and not included no same as in python
let b="ch"

let c="i"
console.log(b.concat(c)+"ku",""+"Shukla")
// strings are immutable