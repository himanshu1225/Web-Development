let cp = require("child_process");
// console.log("Opening the calculator: ");
// calc is the cmd to run the calculator in cmdprompt
// cp.execSync("calc");
// cp.execSync("code");
// console.log("Calc opened");

// console.log("lets open browser and open ❤️");
// cp.execSync("start chrome https://www.stackoverflow.com");

// start chrome is cmd to open chrome

// with the help of this we can run any file written in any language.
let output = cp.execSync('node "f:\\WebDev\\NodeJs\\abc.js"');
// console.log("output received is ", output);
// return type of execSyncy() is binary, concatenate the output with a string to get the exact output.
console.log("output received is " + output);
