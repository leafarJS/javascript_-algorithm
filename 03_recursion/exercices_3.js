/* capitalizeFirst

Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

capitalizarPrimero

Escribe una función recursiva llamada capitalizeFirst. Dada una matriz de cadenas, escriba en mayúscula la primera letra de cada cadena en la matriz. */

function capitalizeFirst(arr) {
  if (arr.length === 0) return false;
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substring(1)];
  }
  const letter = capitalizeFirst(arr.slice(0, -1));
  const string =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].substr(1);
  letter.push(string);
  return letter;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
console.log(capitalizeFirst(["c", "t", "b"])); // ['C','T','B']
console.log(capitalizeFirst([])); // false

function nestedEvenSum() {
  // add whatever parameters you deem necessary - good luck!
}

/* nestedEvenSum

Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.


anidadoEvenSuma

Escribe una función recursiva llamada nestedEvenSum. Devuelve la suma de todos los números pares en un objeto que puede contener objetos anidados. */

function nestedEvenSum(obj, sum = 0) {
  // add whatever parameters you deem necessary - good luck!
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
console.log(nestedEvenSum(15)); // 0

/* capitalizeWords

Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.


capitalizarPalabras

Escribe una función recursiva llamada capitalizeWords. Dada una matriz de palabras, devuelva una nueva matriz que contenga cada palabra en mayúscula. */

function capitalizeWords(array) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) return false;
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(["i", "am", "learning", "recursion"])); // ['I', 'AM', 'LEARNING', 'RECURSION']

/* stringifyNumbers

Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

stringifyNumbers

Escriba una función llamada stringifyNumbers que tome un objeto y encuentre todos los valores que son números y los convierta en cadenas. ¡La recursividad sería una excelente manera de resolver esto! */

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let objeto = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

let objeto1 = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66",
      aleatorio: "any",
    },
  },
};

console.log(stringifyNumbers(objeto));
console.log(stringifyNumbers(objeto1));

/* collectStrings

Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

recoger cadenas

Escriba una función llamada collectStrings que acepte un objeto y devuelva una matriz de todos los valores en el objeto que tienen un tipo de cadena */

function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}
const objeto3 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
console.log(collectStrings(objeto3)); // ["foo", "bar", "baz"])
