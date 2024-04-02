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

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false

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


/** 3 Удаление всех повторяющихся значений в строке

Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.

**Input**: String

**Output**: String
*/

function removeDupes(str) {
  //   const res = [];
  //   const map = {};
  //   for (let i = 0; i < str.length; i++) {
  //     const char = str[i];
      
  //     if (!map[char]) {
  //       map[char] = true;
  //       res.push(char)
  //     }
  //   }
    
  //   return res.join("") ;
  return Array.from(new Set(str)).join(""); 
  }
  
  console.log(removeDupes("abcd")); // -> 'abcd'
  console.log(removeDupes("aabbccdd")); // -> 'abcd'
  console.log(removeDupes("abcddbca")); // -> 'abcd'
  console.log(removeDupes("abababcdcdcd")); // -> 'abcd'

/** 4 Какая строка встречается чаще всего

Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.

**Input**: String[]

**Output**: String

function highestFrequency(array) {
	 // todo
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi
*/

function highestFrequency(array) {
  const map = {};
  let maxFreq = 0;
  let maxFreqStr = array[0];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (map[current]) {
      map[current]++;
    } else {
      map[current] = 1;
    }

    if (map[current] > maxFreq) {
      maxFreq = map[current];
      maxFreqStr = current;
    }
  }
  
  return maxFreqStr;
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(
  highestFrequency([
    "abc",
    "abc",
    "def",
    "def",
    "def",
    "ghi",
    "ghi",
    "ghi",
    "ghi",
  ])
); // -> ghi
