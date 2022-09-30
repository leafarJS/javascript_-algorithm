//Escribe una función llamada mismaFrecuencia. Dados dos números enteros positivos, averigüe si los dos números tienen la misma frecuencia de dígitos.

function sameFrecuncy(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }
  for (let i = 0; i < strNum2.length; i++) {
    countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1;
  }
  for (const key in countNum1) {
    if (Object.hasOwnProperty.call(countNum1, key)) {
      if (countNum1[key] !== countNum2[key]) return false;
    }
    return true;
  }
}
// Implemente una función llamada areThereDuplicates que acepta un número variable de argumentos y verifica si hay duplicados entre los argumentos pasados. Puede resolver esto usando el patrón de contador de frecuencia O el patrón de punteros múltiples

// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicate() {
  let collection = {};
  for (const key in arguments) {
    if (Object.hasOwnProperty.call(arguments, key)) {
      collection[key] = (collection[arguments[key]] || 0) + 1;
    }
  }
  for (const key in collection) {
    if (Object.hasOwnProperty.call(collection, key)) {
      if (collection[key] > 1) return true;
    }
  }
  return false;
}
// areThereDuplicates Solution (Multiple Pointers)

function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

//areThereDuplicates One Liner Solution

function areThereDuplicates1() {
  return new Set(arguments).size !== arguments.length;
}

console.log(sameFrecuncy(182, 812));
console.log(areThereDuplicate(182, 812));
console.log(areThereDuplicates(182, 812));
console.log(areThereDuplicates1(182, 812));
