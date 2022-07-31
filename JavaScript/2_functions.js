// Non primitives: Arrays, Objects

// function keyword functionName, there is no return type
function sayHi() {
  console.log("I am sayHi function !!");
}
sayHi();

// dont have to declare the variable, directly write and recieve
function paramFunc(param) {
  console.log("value of param received: ", param);
}

paramFunc();
paramFunc(10);
paramFunc("String");
paramFunc([1, 2, 3, 4, 5]);

// Any type of value can be returned
// returning either boolean or string :D
function anyReturn(param) {
  let rVal = Math.random() > 0.5 ? true : "less than 0.5";
  return rVal;
}

let rval = anyReturn();
console.log(rval);
