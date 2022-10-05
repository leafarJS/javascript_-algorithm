/* power
Escribe una función llamada power que acepte una base y un exponente. La función debe devolver la potencia de la base al exponente. Esta función debe imitar la funcionalidad de Math.pow(); no se preocupe por las bases negativas y los exponentes. */
function power(num1, num2) {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

/* factorial 
Escriba una función factorial que acepte un número y devuelva el factorial de ese número. Un factorial es el producto de un número entero y todos los números enteros debajo de él; por ejemplo, el factorial cuatro (4!) es igual a 24, porque 4 * 3 * 2 * 1 es igual a 24. El factorial cero (0!) siempre es 1. */

function factorial(num) {
  if (num === 0) return 1;
  if (num === 1) return 1;

  return num * factorial(num - 1);
}
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

/* Producto del arreglo 
Escriba una función llamada productOfArray que tome una matriz de números y devuelva el producto de todos ellos. */

function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

// SAMPLE INPUT/OUTPUT
/* Escriba una función llamada recursiveRange que acepte un número y sume todos los números desde 0 hasta el número pasado a la función */

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

/* Fibonacci
Escriba una función recursiva llamada fib que acepte un número y devuelva el n-ésimo número en la secuencia de Fibonacci. Recuerda que la secuencia de Fibonacci es la secuencia de números enteros 1, 1, 2, 3, 5, 8, ... que comienza con 1 y 1, y donde cada número a partir de entonces es igual a la suma de los dos números anteriores. */

function fib(i) {
  if (i <= 2) return 1;
  return fib(i - 1) + fib(i - 2);
}

console.log(fib(1)); // 1
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
