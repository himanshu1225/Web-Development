// Array declare
let array = [1, 2, 3, 4, 5];
console.log(array);
console.log("length of array is", array.length);

let i = 0;
while (i < array.length) {
  console.log("Element at idx", i, "is", array[i]);
  i++;
}

// Basic array important functions:
// 1. add at last(push) and front(unshift)
// Note: you can add anything in array strings, number, object. JS is not racist like other language.
array.push("added at last");
array.unshift("added at front");
array.push(100);
console.log(array);

// 2. remove from first (shift) and last (pop)

array.pop();
array.shift();
console.log(array);

// 3. slice is just like substring method (java)
let partOfArray = array.slice(2, 4);
// will return elements between 2 and 4 (exclusive)
console.log(partOfArray);
console.log(array);
// if end idx not given then from 1st to last it will get the elements

// 4. splice(): delete li jagh splice bnaya array me. It is generic delete
array.splice(2, 1);
// delete the one item at index 2
console.log(array);
array.splice(2, 3);
// delete the 3 elements from idx 2;
console.log(array);
// Note: Splice() changes the actual array. It does not create copy like slice().

// 5. indexOf: will tell the index of element
console.log(array.indexOf(2));
// tell the index of element 2 in array

// 6. includes: returns true or false (case sensitive)
console.log(array.includes(2));
