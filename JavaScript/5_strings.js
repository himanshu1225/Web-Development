let singleQuotes = "Hi i am single quotes string";
let doubleQuotes = "Hi i am double quotes string";

console.log(singleQuotes);
console.log(doubleQuotes);

// String functions:
let char = singleQuotes.charAt(3);
let ascii = singleQuotes.charCodeAt(3);
let subStr = singleQuotes.substring(3, 12);
console.log(char);
console.log(ascii);
console.log(subStr);

// join and split (important functions)
let arrayOfStrings = singleQuotes.split(" ");
// let arrayOfStrings = singleQuotes.split("i");
// let arrayOfStrings = singleQuotes.split("");
console.log(arrayOfStrings);

let joinOfStr = arrayOfStrings.join("+");
console.log(joinOfStr);
// if you google anything then string is separated with + sign

// trim(): remove front and back unwanted spaces
let str = "       hi i had front and back spaces     ";
console.log(str);
str = str.trim();
console.log(str);
