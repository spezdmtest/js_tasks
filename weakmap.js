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
console.log(map); // WeakMap {}

// ======================================================================
const cache = new WeakMap();
function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
   return cache.get(user);
}

let lena = {name: "Elena"}
let alex = {name: "Alex"}

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena)); // false
console.log(cache.has(alex)); // true