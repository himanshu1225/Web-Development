// print:
console.log("Hello JS ;)");

// declare a variable
let a; // by default value of a is undefined
// JS only tell you that it is a variable not its type.
a = 10;
a = 10.1;
a = "Now I am String";
console.log("variable contains: ", a);
a = "i am also a string";

// Variable types:  Primitives (atomic): number, string, boolean, null, symbol
a = true;
a = null;

// JS similar to java, c, c++
// print 1 to 10 using a loop like java
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// is prime
let number = 22;
let flag = true;

for (let div = 2; div * div <= number; div++) {
  if (number % div == 0) {
    flag = false;
    break;
  }
}
if (flag == true) {
  console.log(number, "is Prime!!");
} else {
  console.log(number, "is not Prime!!");
}
