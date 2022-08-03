let fs = require("fs");

// 1. read
let buffer = fs.readFileSync("f:\\WebDev\\NodeJs\\abc.js");

// console.log("binary data: ", buffer); // this will give o/p in binary. As  JS dont know what you going to do.
// As word document gives you in textual format , JS will give u in binary format.

// Concate krto with string ,it will convert in string.
// console.log("Code read from the abc.js: " + buffer);

//2. create :
// openSync with "w" mode will create a file
fs.openSync("abc.txt", "w");

// 3. write
fs.writeFileSync("abc.txt", "I am writng on this file.");

// Note: - if file is not created then it will create the file then write it.
//       - one problem is, it replaces everything which is present in the file.
// fs.writeFileSync("abc.text", "I am going to replace everything");

// 4. update
fs.appendFileSync("abc.txt", " I am not going to replace, i am here to add");

// Folder:
