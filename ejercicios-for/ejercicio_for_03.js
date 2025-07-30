/*
Dado un array de 20 números aleatorios, usa un ciclo `for` para encontrar: el número mayor, 
el menor, la suma total, el promedio, y cuántos números son pares e impares.

*/


let randomNumber = 0;
let numeros = [];
let suma = 0;
let contPar = 0;

// Generar 20 números aleatorios entre 1 y 60
for (let i = 0; i < 20; i++) {
  randomNumber = Math.floor(Math.random() * 60) + 1;
  numeros.push(randomNumber);
}

console.log("Números generados:", numeros);

let mayor = numeros[0];
let menor = numeros[0];

// Recorrer el arreglo para sumar, contar pares y hallar mayor/menor
for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];

  if (numero > mayor) {
    mayor = numero;
  }

  if (numero < menor) {
    menor = numero;
  }

  if (numero % 2 === 0) {
    contPar++;
  }

  suma += numero;
}

let promedio = suma / numeros.length;

console.log("Número mayor:", mayor);
console.log("Número menor:", menor);
console.log("Suma:", suma);
console.log("Promedio:", promedio);
console.log("Total números pares:", contPar);
console.log("Total números impares:", numeros.length - contPar);