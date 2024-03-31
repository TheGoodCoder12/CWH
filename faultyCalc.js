x=Math.random();

// This faulty calculator does following:
// 1. It takes two numbers as input from the user
// 2. It perfoms wrong operations as follows:

// + ---> -
// * ---> +
// - ---> /
// / ---> **

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    readline.close();
  });
