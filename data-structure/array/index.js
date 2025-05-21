const array = [1, 2, 3, 'Hello'];

// accessing the value
const access = [array[0], array[3]];

// changing the value
array[0] = 'ronel';

// add element to the end
array.push(4);

// add element at the begining
array.unshift('world');

// remove element from the end
array.pop();

// remove from the begining
array.shift();

// display all the element
for (const item of array) {
  //   console.log(item);
}
