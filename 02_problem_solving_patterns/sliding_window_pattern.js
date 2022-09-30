//sliding window pattern
//patrón de ventana delizante

let maxSubarraySum = (arr, n) => {
  console.log(n);
  if (n > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - n; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    console.log(temp);
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};
let arr = [2, 8, 10, 15, 2, 2, 4, 8, 9, 7, 8];
let n = Math.floor(Math.random() * arr.length - 1);
let result = maxSubarraySum(arr, n);
console.log(result);

//_______________REFACTORIZADO__________________//

//Time complexity -O(N)
function maxSubarraySuma(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  console.log(tempSum);
  for (let i = num; i < arr.length; i++) {
    let operacion = arr[i - num] + arr[i];
    tempSum = tempSum - operacion;
    console.log("Resultado es: " + operacion);
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
let arr1 = [2, 8, 10, 15, 2, 2, 4, 8, 9, 7, 8];
let num = Math.floor(Math.random() * arr.length - 1);
let resultado = maxSubarraySuma(arr, n);
console.log(resultado);
