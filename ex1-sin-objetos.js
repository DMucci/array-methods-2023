/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obteenr la información requerida
 *
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */
numbers.forEach(numbers => {
    console.log(numbers);
})
/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */
let numberBigger = numbers.find((n) => n >10);
console.log(numberBigger);
/**
 * Utliza el método some para saber si existe un número mayor de 20
 */
let numberFinded = numbers.some((n) => n > 20);
console.log(numberFinded);
/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */
let impares = numbers.every((i) => i%2 == 0)
console.log(impares);
/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */
let newArr = numbers.filter(checkNumbers);

function checkNumbers(n) {
    return n > 3 && n < 9
}
console.log(newArr);

/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */
let numberSign = numbers.map((s) => Math.sign(s))
console.log(numberSign);

console.log(numbers.map((n) => Math.sign(n)));

console.log(numbers.map(function (n) {
    return Math.sign(n);
}));
//Lo podemos resolver con ternarios. La expresion significa si los numeros son menor que 0 devuelveme un -1 pero si pasa a la inversa (osea que sean mayores que 0) devuelveme un 1.
const mappedNumbers = numbers.map((num) => (num < 0 ? -1 : 1));
console.log(
  "Ejercicio 6: Nuevos números con -1 para negativos y +1 para positivos:",
  mappedNumbers
);