// Primera pila de ejercicios.

// 1.Dado un string  cree una función que invierta el orden de sus caracteres. Ejemplo: “Hello world” = “dlrow olleh”. No puede utilizarse desestructuración ni recursión.

//Code
// let myStr = "Hello world";

// function reverse(str) {
//   let reverseStr = "";
//   for (let leter of str) {
//     reverseStr = leter + reverseStr;
//   }
//   return reverseStr;
// }

// console.log(reverse(myStr));

// 2. Dado un string, cree una función que invierta el orden de sus caracteres. Debe de utilizar una desestructuración en el proceso.

//Code
// let myStr2 = "Hola Mateo";

// const invertir = (str) => {
//   return [...str].reverse().join("");
// };
// console.log(invertir(myStr2));

// 3. Dado un string invierta el orden recursivamente.

// let myStr3 = "Hola Mundo";

// function recursiva(text) {
//   if (text === "") return "";
//   let subText = text.substring(1);
//   return recursiva(subText) + text.charAt(0);
// }

// console.log(recursiva(myStr3));

// 5. Construya una función isPalindrome, la cual dado un string nos indique si es un palindrome o no. Ejemplo: “Yo dono rosas, oro no doy”.

// const isPalindrome = (str) => {
//   str = str.replace(/\s/g, "");
//   const lower = str.toLowerCase();
//   const reverse = lower.split("").reverse().join("");
//   return lower === reverse;
// };

// console.log(isPalindrome("Aman a Panama"));

// 6. Ejercicio adicional: Por ultimo, intente invertir las palabras de una frase, pero cada palabra debe mantenerse en el lugar. Ejemplo: “Hello world” = “olleH dlrow”.
// let myStr3 = "Hello world";

// function reverse(str) {
//   let reverseStr = "";
//   for (let leter of str) {
//     reverseStr = leter + reverseStr;
//   }
//   return reverseStr;
// }

// function adicional(str) {
//   str = str.split(" ");
//   return str.map((word) => reverse(word));
// }
// console.log(adicional(myStr3));

//Recursividad a colacion de primera pila de ejercicios.

// Escribe una función recursiva que dado un número entero n, retorne un array con todos los números enteros en orden decreciente desde n a 1.

let arr = [];
function decreciente(n) {
  if (n <= 0) return arr;
  arr.push(n);
  return decreciente(n - 1);
}

console.log(decreciente(20));

// Calcular el factorial de un número.
// 4! = 4.3.2.1 = 24
//0! = 1

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(4));

// Segunda pila de ejercicios.

// 7. Encuentre el número que falta en un array ordenado que comienza en 0.
// const numbers = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];

// function findMissing(arr) {
//   let index = 0;
//   while (index < arr.length) {
//     if (arr[index] + 1 === arr[index + 1]) {
//       index++;
//     } else {
//       return arr[index] + 1;
//     }
//   }
// }

// console.log(findMissing(numbers));

// const numbers2 = [0, 1, 2, 4, 5, 8, 10];
// function findMissing(arr) {
//   let r = [];
//   for (let i = 0; i < 10; i++) {
//     if (arr[0] === i) arr.shift();
//     else r.push(i);
//   }
//   return r;
// }

// console.log(findMissing(numbers2));

//Encuentre todos los numeros que faltan en un array no necesariamente ordenado, cuyo minimo es 0.

// const numbers2 = [4, 5, 0, 1, 2, 8, 10];
// function findMissing(arr) {
//   arr = arr.sort(function (a, b) {
//     return a - b;
//   });
//   let r = [];
//   for (let i = 0; i < 10; i++) {
//     if (arr[0] === i) arr.shift();
//     else r.push(i);
//   }
//   return r;
// }

// console.log(findMissing(numbers2));

//Encuentre todos los numeros que faltan en un array no necesariamente ordenado, que no se sabe cual es su minimo.

const numbers = [3, 4, 6, 9, 10];
function findMissing(arr) {
  let min = Math.min(...arr);
  // arr = arr.sort(function (a, b) {
  //   return a - b;
  // });
  let r = [];
  for (let i = min; i < 10; i++) {
    if (arr[0] === i) arr.shift();
    else r.push(i);
  }
  return r;
}

console.log(findMissing(numbers));

// let inputArr = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];

// function FindIntersection(strArr) {
//   let str1 = strArr[0].split(", ");
//   let str2 = strArr[1].split(", ");
//   let res = [];
//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j]) {
//         res.push(str1[i]);
//       }
//     }
//   }
//   return res.lentgh > 0 ? res.sort((a, b) => a - b).join(",") : false;
// }

// console.log(FindIntersection(inputArr));

//Resolucion con implementacion de Tabla Hash

function FindIntersection(strArr) {
  const lists = strArr.map((str) => str.split(", "));
  const firstList = lists[0];
  const secondList = lists[1];

  let matchMap = {};
  let resultArr = [];

  firstList.forEach((num) => (matchMap[num] = true));

  secondList.forEach((num) => {
    if (matchMap[num]) {
      resultArr.push(num);
    }
  });

  if (resultArr.length > 0) {
    return resultArr.join(",");
  }

  return false;
}

// Haga que la función QuestionsMarks (str) tome el parámetro de cadena str, que contendrá números de un solo dígito, letras y signos de interrogación, y verifique si hay exactamente 3 signos de interrogación entre cada par de dos números que sumen 10. Si es así, entonces su programa debería devolver la cadena verdadera, de lo contrario debería devolver la cadena falsa. Si no hay dos números que sumen 10 en la cadena, su programa también debería devolver falso.

// Por ejemplo: si str es "arrb6???4xxbl5???eee5", entonces su programa debería devolver verdadero porque hay exactamente 3 signos de interrogación entre 6 y 4, y 3 signos de interrogación entre 5 y 5 al final de la cadena.
// Ejemplos
// Entrada: "aa6?9"
// Salida: falso
// Entrada: "acc?7??sss?3rr1??????5"
// Salida: verdadero

const str = "acc?7??sss?3rr1??????5";

function QuestionsMarks(str) {
  // code goes here
  const arrStr = str.split("");
  console.log(arrStr);

  let numbersMap = {};
  arrStr.forEach((num, index) => {
    if (parseInt(num)) {
      numbersMap[index] = parseInt(num);
    }
  });
  // console.log(numbersMap);

  function signs(p1, p2) {
    let signsArr = [];
    let newArr = arrStr.slice(p1, p2);
    newArr.forEach((sig) => (sig === "?" ? signsArr.push(sig) : false));
    return signsArr.length >= 3 ? true : false;
  }

  let suma = 0;
  let prev;
  let act;

  for (let num in numbersMap) {
    suma += numbersMap[num];
    if (suma === 10) {
      act = num;
      // console.log(prev, act);
      return signs(parseInt(prev), parseInt(act));
    } else {
      prev = num;
    }
  }
  return false;
}

console.log(QuestionsMarks(str));

//Otra solucion optima para el problema anterior es la siguiente:

function QuestionsMarks2(str) {
  let res = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        res = true;
        if (str.slice(i, j).split("?").length - 1 < 3) {
          return false;
        }
      }
    }
  }
  return res;
}

console.log(QuestionsMarks2(str));

// Haga que la función LongestWord (sen) tome el parámetro sen que se está pasando y devuelva la palabra más grande de la cadena. Si hay dos o más palabras que tienen la misma longitud, devuelva la primera palabra de la cadena con esa longitud. Ignore la puntuación y asuma que sen no estará vacío.
// Examples;
// Input: "fun&!! time";
// Output: time;
// Input: "I love dogs";
// Output: love;

let word = "letter after letter!!";

function LongestWord(sen) {
  // code goes here
  sen = sen.match(/[a-z]+/gi);
  let higherWord = [];
  let higherCurrent = sen[0];
  for (let i = 0; i < sen.length; i++) {
    if (sen[i].length > higherCurrent.length) {
      higherCurrent = sen[i];
      higherWord.push(sen[i]);
    }

    if (sen[i].length === higherCurrent.length) {
      higherCurrent = higherCurrent;
    }

    if (sen.length === 1) {
      higherWord.push(sen[0]);
    }

    if (sen.length <= 2 && higherCurrent.length > sen[i].length) {
      higherWord.push(sen[0]);
    }
  }

  if (higherWord.length === 0) {
    higherWord.push(higherCurrent);
  }

  return higherWord;
}

console.log(LongestWord(word));

//Dos soluciones alternativas y super optimas al problema anterior

function LongestWord2(sen) {
  var arr = sen.match(/[a-z]+/gi);

  var sorted = arr.sort(function (a, b) {
    return b.length - a.length;
  });

  return sorted[0];
}

function LongestWord3(sen) {
  sen = sen.trim();
  sen = sen.replace(/[^a-zA-Z0-9 ]/g, "");

  let longest = "";

  var arr = sen.split(" ").forEach((word) => {
    if (word.length > longest.length) longest = word;
  });

  return longest;
}

// Algoritmo de ordenamiento Sort propio.

let arreglo = [5, 0, 8, 6, 1, 4];

function searchMax(arr) {
  let currentMax = arr[0];
  let pos = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > currentMax) {
      currentMax = arr[j];
      pos = j;
    }
  }
  return pos;
}

function agusSort(arr) {
  let ord = [];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let max = searchMax(arr);
    ord.push(arr.splice(max, 1));
  }

  return ord;
}

console.log(agusSort(arreglo));

//Select Sort e insert Sort repasar antes del Merge.
//Tabla Hash implementacion y Arboles.

// Problemas de Algoritmos y Estructuras de Datos.
// https://coderbyte.com/editor/Min%20Window%20Substring:JavaScript
// https://www.hackerrank.com/challenges/larrys-array/problem
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#intermediate-algorithm-scripting

// MinWindowSubstring (strArr) toma la matriz de cadenas almacenada en strArr, que contendrá solo dos cadenas, el primer parámetro es la cadena N y el segundo parámetro es una cadena K de algunos caracteres, y su objetivo es determinar la subcadena más pequeña de N que contiene todos los caracteres en K. Por ejemplo: si strArr es ["aaabaaddae", "aed"], entonces la subcadena más pequeña de N que contiene los caracteres a, e y d es "dae" ubicada al final de la cadena . Entonces, para este ejemplo, su programa debería devolver la cadena dae.

// Otro ejemplo: si strArr es ["aabdccdbcacd", "aad"] entonces la subcadena más pequeña de N que contiene todos los caracteres en K es "aabd" que se encuentra al principio de la cadena. Ambos parámetros serán cadenas de una longitud de 1 a 50 caracteres y todos los caracteres de K existirán en algún lugar de la cadena N. Ambas cadenas solo contendrán caracteres alfabéticos en minúsculas.
// Ejemplos
//
// Salida: aksfaje
// Entrada: ["aaffhkksemckelloe", "fhea"]
// Salida: affhkkse

let strin = ["aabdccdbcacd", "aad"];

function MinWindowSubstring(strArr) {
  let pI = (pL = pR = strArr[0].indexOf(strArr[1][0]));
  let iUsados = {};
  let i = 0;
  let found = false;
  for (let char of strArr[1]) {
    while (found === false) {
      if (
        pL >= 0 &&
        strArr[0][pI - i] === char &&
        iUsados[pI - i] === undefined
      ) {
        pL = pI - i;
        iUsados[pI - i] = true;
        found = true;
      } else if (
        pR < strArr[0].length - 1 &&
        strArr[0][pI + i] === char &&
        iUsados[pI + i] === undefined
      ) {
        pR = pI + i;
        iUsados[pI + i] = true;
        found = true;
      }
      i++;
    }
    i = 0;
    found = false;
  }
  return strArr[0].slice(pL, pR + 1);
}

console.log(MinWindowSubstring(strin));

// Jerga
// Pig Latin es una forma de alterar las palabras en inglés. Las reglas son las siguientes:
// - Si una palabra comienza con una consonante, tome la primera consonante o grupo de consonantes, muévala al final de la palabra y agréguela ay.
// - Si una palabra comienza con una vocal, simplemente agréguela way al final.
// Traduce la cadena proporcionada a Pig Latin. Se garantiza que las cadenas de entrada sean palabras en inglés en minúsculas.
//Ejemplos:
// translatePigLatin("california")debería devolver la cadena aliforniacay.
// translatePigLatin("paragraphs")debería devolver la cadena aragraphspay.
// translatePigLatin("glove")debería devolver la cadena oveglay.
// translatePigLatin("algorithm")debería devolver la cadena algorithmway.
// translatePigLatin("eight")debería devolver la cadena eightway.
// Debe manejar palabras en las que la primera vocal se encuentre en medio de la palabra. translatePigLatin("schwartz")debería devolver la cadena artzschway.
// Debe manejar palabras sin vocales. translatePigLatin("rhythm")debería devolver la cadena rhythmay.

let exp = "algorithm";
function translatePigLatin(str) {
  let consonant = "bcdfghjklmnpqrstwvxyz";
  let concatC = "";
  let prev = 0;
  for (let i = 0; i < str.length; i++) {
    if (consonant.indexOf(str[i]) !== -1) {
      if (i === 0) {
        concatC += str[i];
        prev++;
      }

      if (i + 1 === prev + 1) {
        concatC += str[i];
        prev++;
      }
    } else {
      if (i === 0) {
        return str + "way";
      }
    }
  }

  return str.slice(prev) + concatC + "ay";
}

console.log(translatePigLatin(exp));

// Déjalo caer
// Dada la matriz arr, iterar y eliminar cada elemento comenzando desde el primer elemento (el índice 0) hasta que la función funcregrese truecuando el elemento iterado pasa a través de ella.
// Luego, devuelva el resto de la matriz una vez que se cumpla la condición; de lo contrario, arrdebe devolverse como una matriz vacía.
//Ejemplos:
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;})debería volver [3, 4].
// dropElements([0, 1, 0, 1], function(n) {return n === 1;})debería volver [1, 0, 1].

//De manera recursiva
function dropElementsRecursiva(arr, func) {
  if (arr.length === 0) return arr;
  let elem = arr.shift();
  return func(elem)
    ? [elem].concat(dropElementsRecursiva(arr, func))
    : dropElementsRecursiva(arr, func);
}

//Solucion deseada
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

function filter(j) {
  return j > 5;
}

console.log(dropElements([1, 2, 3, 4, 5, 6, 7, 8, 9], filter));

// Sumar todos los números de Fibonacci impares
function sumFibs(num) {
  let prev = 0;
  let current = 1;
  let result = 0;
  while (result <= num) {
    if (current % 2 !== 0) {
      result += current;
    }
    current += prev;
    prev = current - prev;
  }

  return result;
}
//Buscar y reemplazar

function myReplace(str, before, after) {
  let index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Convertidor de números romanos
const romanNumbers = {};

// Cifrado de Caesars
