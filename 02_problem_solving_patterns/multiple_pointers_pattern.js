//multiple pointers pattern
//patrón de múltiples punteros

/*
La idea es crear punteros o valores que correspondan a un indice o posición y luego nos movemos hacia el principio, hacia el final o hacia el medio basado en cierta condición 
*/
// time complexity - O(N^2)
// space complexity o(1)

//funcion para encontrar una suma que de cero
let sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        console.log(arr[i], arr[j]);
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
};
let arr = [-3, -2, -1, 0, 1, 2, 3]; //[-3,3]
let arr1 = [-2, -1, 0, 1, 2, 3]; //[-2,2]
let arr2 = [1, 2, 3, 4, 5, 6]; // null
let result = sumZero(arr2);
console.log(result);

//_______________REFACTORIZADO__________________//

function sumaCero(arr) {
  let izq = 0;
  let der = arr.length - 1;

  while (izq < der) {
    let suma = arr[izq] + arr[der];
    console.log(suma);
    if (suma === 0) {
      return [arr[izq], arr[der]];
    } else if (suma > 0) {
      der--;
    } else {
      izq++;
    }
  }
  return null;
}
let resultado = sumaCero(arr2);
console.log(resultado);
