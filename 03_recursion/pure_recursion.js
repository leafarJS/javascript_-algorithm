function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  console.log(newArr.length);
  return newArr;
}
let arreglo = [
  2, 12, 54, 87, 12, 654, 98, 61, 987, 9851, 687, 63, 516, 7, 98, 51, 685, 4987,
  63, 1, 325, 4, 6, 2, 4, 98, 765, 67, 987, 84,
];
let resultado = collectOddValues(arreglo);
console.log(resultado);
