//frecuency counter patterns
//patrones de contador de frecuencia

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frecuencyCounter1 = {};
  let frecuencyCounter2 = {};
  for (const val of arr1) {
    frecuencyCounter1[val] = (frecuencyCounter1[val] || 0) + 1;
    console.log(frecuencyCounter1);
  }

  for (const val of arr2) {
    frecuencyCounter2[val] = (frecuencyCounter2[val] || 0) + 1;
    console.log(frecuencyCounter2);
  }

  for (const key in frecuencyCounter1) {
    if (Object.hasOwnProperty.call(frecuencyCounter1, key)) {
      if (!(key ** 2 in frecuencyCounter2)) {
        return false;
      }
      if (frecuencyCounter2[key ** 2] !== frecuencyCounter1[key]) {
        return false;
      }
    }
  }
  return true;
}
let result = same([2, 1, 4, 4], [16, 16, 1, 4]);
console.log(result);

//######################################################//

let igualCuadrado = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let contadorFrecuencias1 = {};
  let contadorFrecuencias2 = {};

  for (const val of contadorFrecuencias1) {
    contadorFrecuencias1[val] = (contadorFrecuencias1[val] || 0) + 1;
    console.log(contadorFrecuencias1);
  }
  for (const val of contadorFrecuencias2) {
    contadorFrecuencias2[val] = (contadorFrecuencias2[val] || 0) + 1;
    console.log(contadorFrecuencias2);
  }

  for (const key in contadorFrecuencias1) {
    if (Object.hasOwnProperty.call(contadorFrecuencias1, key)) {
      if (!(key ** 2 in contadorFrecuencias2)) {
        return false;
      }
      if (contadorFrecuencias2[key ** 2] !== contadorFrecuencias1[key]) {
        return false;
      }
    }
  }
  return true;
};
let resultado = same([2, 1, 4, 4, 5, 6, 5, 6], [16, 16, 1, 4, 25, 36, 25, 36]);
console.log(resultado);
