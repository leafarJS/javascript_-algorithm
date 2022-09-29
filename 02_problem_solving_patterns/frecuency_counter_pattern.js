//problem solving patterns
//patrones de resolución de problemas

//frecuency counter patterns
//patrones de contador de frecuencia

//solución poco practica porque tiene buble anidado y una operación cuadratica
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort((a, b) => {
    return a - b;
  });
  arr2.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}
let result = same([2, 1, 4, 4], [16, 16, 1, 4]);
console.log(result);
//###################################################//
let igualCuadrado = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort((a, b) => {
    return a - b;
  });
  arr2.sort((a, b) => {
    return a - b;
  });
  for (const i in arr1) {
    if (Object.hasOwnProperty.call(arr1, i)) {
      let indiceCorrecto = arr2.indexOf(arr1[i] ** 2);
      if (indiceCorrecto === -1) {
        return false;
      }
      console.log(arr2);
    }
    arr2.slice(indiceCorrecto, 1);
  }
  return true;
};

let resultado = same([2, 1, 4, 4], [16, 16, 1, 4]);
console.log(resultado);
