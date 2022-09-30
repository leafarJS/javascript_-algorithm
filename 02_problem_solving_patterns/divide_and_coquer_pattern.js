// Divide and conquer Pattern
// Patrón divide y vencerás

//linear Search
// time complexity O(N)

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
let arr = [
  1, 20, 15, 18, 20, 2, 3, 4, 20, 15, 45, 89, 120, 245, 138, 46, 84, 458, 651,
  4987, 145, 78, 6, 91, 65, 65, 58, 78, 84, 1, 878, 46, 1,
];
let value = 878;
let result = search(arr, value);
console.log("Primera función: " + result);

//time complexity - Lon(N) - Binary Search
//_______________REFACTORIZADO__________________//

function buscar(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  arr.sort((a, b) => {
    return a - b;
  });

  while (min <= max) {
    let mitad = floor(Math.floor(min + max) / 2);
    let elementoActual = arr[mitad];

    if (elementoActual < val) {
      min = mitad + 1;
    } else if (elementoActual > val) {
      max = mitad - 1;
    } else {
      return mitad;
    }
  }
  return -1;
}
let arr1 = [
  1, 20, 15, 18, 20, 2, 3, 4, 20, 15, 45, 89, 120, 245, 138, 46, 84, 458, 651,
  4987, 145, 78, 6, 91, 65, 65, 58, 78, 84, 1, 878, 46, 1,
];
let val = 878;
let resultado = search(arr1, val);
console.log("Segunda Función: " + resultado);
