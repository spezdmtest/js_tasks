const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);
console.log(set); // Set { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6 }

set.add(10).add(20).add(30).add(20);
// console.log(set); // Set { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 10, 7: 20, 8: 30 }
// console.log(set.has(30)); // true
// console.log(set.has(42)); // false
// console.log(set.size); // 9
// console.log(set.delete(1)); // true
// console.log(set.size); // 8
// console.log(set.clear());
// console.log(set.size); // 0

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

// for(let key of set) {
//     console.log(key)
// }

// function uniqValues(array) {
//   return [...new Set(array)];
// }
// console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 6])); // [ 1, 2, 4, 5, 6 ]

// function uniqValues(array) {
//     return Array.from(new Set(array));
// }
// console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 6]));
