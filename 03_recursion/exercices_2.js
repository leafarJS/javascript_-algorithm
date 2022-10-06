/* reverse

Write a recursive function called reverse which accepts a string and returns a new string in reverse.

reverso

Escriba una función recursiva llamada inversa que acepte una cadena y devuelva una nueva cadena a la inversa. */
function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1) return str;
  console.log(str);
  //awesome

  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'

/* isPalindrome

Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

esPalindromo

Escriba una función recursiva llamada isPalindrome que devuelva verdadero si la cadena que se le pasa es un palíndromo (lee lo mismo hacia adelante y hacia atrás). De lo contrario devuelve falso. */

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  //short circuit
  if (str.length === 1) return true;
  //
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("h")); //true
console.log(isPalindrome("hh")); //true
console.log(isPalindrome("ha")); //false
console.log(isPalindrome("haah")); //true
console.log(isPalindrome("hannah")); //true
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false

/* someRecursive

Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

algoRecursivo

Escriba una función recursiva llamada someRecursive que acepte una matriz y una devolución de llamada. La función devuelve verdadero si un solo valor en la matriz devuelve verdadero cuando se pasa a la devolución de llamada. De lo contrario devuelve falso. */

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  console.log(arr);
  return someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

/* flatten

Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

aplanar

Escriba una función recursiva llamada aplanar que acepte una matriz de matrices y devuelva una nueva matriz con todos los valores aplanados. */

function flatten(oldArr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
