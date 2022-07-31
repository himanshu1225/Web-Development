// Objects ke alag alag naam hai in other languages.
//  python: dictionary.
//  java: Hashmap (static hota hai)

// Object is just a group of key:value pair
// key can be a number or string
// value can be anything you can put that is there in JS, which is possible
// {key:pair, key-pair,  } --> comma separated
// key: value ->(property)
// key: function -> (method)

let captainAmerica = {
  name: "Steve",
  lastName: "Rogers",
  address: {
    city: "Manhatten",
    state: "NY",
  },
  age: 35,
  isAvenger: true,
  movies: ["First Avenger", "Winter Soldier", "Civil War"],
  sayHi: function () {
    console.log("Cap say Hi !!");
  },
};

// how to extract value from key
console.log(captainAmerica.name);
console.log(captainAmerica.address.city);
console.log(captainAmerica.movies[1]);
// console.log(captainAmerica.sayHi());
captainAmerica.sayHi();

// objects can be directly printed
console.log(captainAmerica);

// how to update the values in the object or add new property
captainAmerica.age = 42;
captainAmerica.friends = ["Tony", "Bruce", "Thor", "Natasha"];
console.log(captainAmerica);

// Delete in objects:
delete captainAmerica.lastName;
console.log(captainAmerica);

// Looping
for (let key in captainAmerica) {
  console.log(key, " : ", captainAmerica[key]);
}

// square brackets are also used to get the value.

let propKey = "age";
console.log(captainAmerica[propKey]);
// console.log(captainAmerica[age]);
// dont forget to use "" to use key.
console.log(captainAmerica["age"]);

// if key is not present then
console.log(captainAmerica.xyz);
console.log(captainAmerica["xyz"]);
