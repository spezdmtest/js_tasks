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
