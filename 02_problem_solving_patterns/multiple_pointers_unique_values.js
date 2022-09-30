//multiple pointers: count unique value challenge
//punteros múltiples: contar el desafío del valor único
let countUniqueValue = (arr) => {
  let unique = new Set(arr);
  return unique.size;
};
let arr = [1, 1, 1, 2, 3, 3, 4, 4, 5, 6];
let result = countUniqueValue(arr);
console.log(result);

function contadorValoresUnicos(arr) {
  if (!typeof arr === Array.isArray(arr)) {
    return 0;
  }
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  return i + 1;
}
let arr1 = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3]; //3
let arr2 = []; //0
let arr3 = false; // 0
let resultado = contadorValoresUnicos(arr3);
console.log(resultado);
