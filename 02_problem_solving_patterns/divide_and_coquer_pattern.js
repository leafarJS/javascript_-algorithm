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
let arr = [1, 20, 15, 18, 20, 2, 3, 4];
val = 3;
let resultado = search(arr, val);
console.log(resulado);
