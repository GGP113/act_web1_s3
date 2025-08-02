/*

Utiliza ciclos `for` anidados para encontrar y mostrar todos los números primos entre 1 y 100. 
Debe indicar cuántos números primos se encontraron.


*/

let modulo = 1;
let noPrimo = false;
let contador = 0;


for (let i = 1; i < 100; i++) {
  noPrimo = false;
  for (j = 2; j < i + 1; j++) {
    let modulo = i % j;

    if (modulo == 0 && i != j) {
      noPrimo = true;
    }

  }

  if (!noPrimo && i!=1) {
    console.log(i);
    contador++
  }
}

console.log("En total hay: " + contador +" número primos")
