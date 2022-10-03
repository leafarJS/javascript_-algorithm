let factorial = (num) => {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
    console.log(total);
  }
  return total;
};
console.log(factorial(5)); //120
console.log(factorial(4)); // 24
console.log(factorial(3)); // 6

function funFactorial(num) {
  if (num === 1) return 1;
  total = num * funFactorial(num - 1);
  console.log(total);
  return total;
}
console.log(funFactorial(5)); //120
console.log(funFactorial(4)); //24
console.log(funFactorial(3)); // 6

//problems frecuentes

//caso base incorrecto
// no disminuir el valor inicial de la función para que concluya el ciclo
// no devolver un return para concluir el caso base
//stack overflow, cuando hay una recursión excesiva sin tener una linea de codigo que le pare.
