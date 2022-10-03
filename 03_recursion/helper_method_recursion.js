function collectOdds(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
let impares = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
console.log(collectOdds(impares));

let paresImpares = (arr) => {
  let pares = [];
  let impares = [];

  function help(index) {
    if (index.length === 0) return;

    if (index[0] % 2 !== 0) {
      impares.push(index[0]);
    } else {
      pares.push(index[0]);
    }
    help(index.slice(1));
  }
  help(arr);
  return {
    pares: pares,
    impares: impares,
  };
};

let arreglo = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let resultado = paresImpares(arreglo);
console.log(resultado);
