const obj = {
  name: 'ronel',
  age: 25,
  key: true,
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

obj.hobby = 'tennis'; // add new key value pair
delete obj.hobby; // delete key value pair

// console.log(obj.name);
// console.log(obj['age']); // make sure the age is string
// console.log(obj);
// obj.sayMyName(); // run the function on the obj

// ---------------> JavaScript Object Methods

// Copies properties from a source object to a target object
// Object.assign(target, source);

// Creates an object from an existing object
// Object.create(object);

// Returns an array of the key/value pairs of an object
// Object.entries(object);

// Creates an object from a list of keys/values (from array to obj)
// const fruits = [
//   ['apples', 300],
//   ['pears', 900],
//   ['bananas', 500],
// ];
// Object.fromEntries();
// const myObj = Object.fromEntries(fruits);
// console.log(myObj);

// Returns an array of the keys of an object
// Object.keys(object);

// Returns an array of the property values of an object
// Object.values(object);

// Groups object elements according to a function
// Object.groupBy(object, callback);
// const fruits = [
//   { name: 'apples', quantity: 300 },
//   { name: 'bananas', quantity: 500 },
//   { name: 'oranges', quantity: 200 },
//   { name: 'kiwi', quantity: 150 },
// ];
// // Callback function to select low volumes
// function myCallback({ quantity }) {
//   return quantity > 200 ? 'ok' : 'low';
// }
// // Group by ok and low
// const result = Object.groupBy(fruits, myCallback);
// console.log(result);
