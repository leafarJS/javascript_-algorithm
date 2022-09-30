//averagePair Solution
//Escribe una función llamada promedioPair. Dada una matriz ordenada de enteros y un promedio objetivo, determine si hay un par de valores en la matriz donde el promedio del par es igual al promedio objetivo. Puede haber más de un par que coincida con el objetivo promedio.
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
//isSubsequence Solution - Iterative
//Escriba una función llamada isSubsequence que tome dos cadenas y compruebe si los caracteres de la primera cadena forman una subsecuencia de los caracteres de la segunda cadena. En otras palabras, la función debe comprobar si los caracteres de la primera cadena aparecen en algún lugar de la segunda cadena, sin que cambie su orden.
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
//isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
