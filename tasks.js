/** 1  
 * * Строки и массивы
 * Уникальность всех символов в строке
Напишите функцию, которая определяет уникальны ли все символы в строке. 
Регистр должен учитываться: ‘a’ и ‘A’ разные символы.
Input: String
Output: Boolean

function isUnique(string) {
	// todo
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
 */

// вариант 1
function isUnique(string) {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (string.lastIndexOf(char) !== i) {
      return false;
    }
  }
  return true;
}

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false

// вариант 2
function isUnique(string) {
  const chars = new Set();
  for (let i = 0; i < string.length; i++) {
    const current = string[i];
    if (chars.has(current)) {
      return false;
    }
    chars.add(current);
  }
  return true;
}

// вариант 3
function isUnique(string) {
	return new Set(string).size === string.length;
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false 

/** 2 Плоский массив
Напишите функцию, принимающая массив с вложенными массивами и 
распакуйте в результирующий плоский массов. 
В результате должны получить новый одномерный массив.
Input: Array
Output: Array
function flatten(array) {
  // todo
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
 */


function flatten(array) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      //   for (let j = 0; j < array[i].length; j++) {
      //     res.push(array[i][j]);
      //   }
      const flat = flatten(array[i]);
      for (let j = 0; j < flat.length; j++) {
        res.push(flat[j]);
      }
    } else {
      res.push(array[i]);
    }
  }
  return res;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
