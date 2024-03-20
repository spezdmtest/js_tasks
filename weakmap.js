let obj = { name: "weakmap" };
// const arr = [obj];
// obj = null;
// console.log(obj); // null
// console.log(arr); // [ { name: 'weakmap' } ]

const map = new WeakMap([[obj, "obj data"]]);
// get set delete has
console.log(map.has(obj)); // true
console.log(map.get(obj)); // 'obj data'

obj = null;
console.log(map.get(obj)); // underfined
console.log(map.has(obj)); // false
console.log(map) // WeakMap {} 