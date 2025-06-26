const map = new Map([
  ['a', 1],
  ['b', 2],
]);

map.set('c', 3); // add a new value
// console.log(map.has('a')); // check if the value exist
map.delete('a'); // delete a value
// console.log(map.size); // check the size of the map
map.clear(); // delete all values

for (const [key, value] of map) {
  // console.log(`${key}: ${value}`);
}
