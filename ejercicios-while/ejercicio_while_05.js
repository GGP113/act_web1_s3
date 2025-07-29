/*
Desarrolla una función que use un ciclo `while` para calcular el factorial de un número dado. 
Debe mostrar paso a paso cómo se va calculando el factorial.

*/

let numero = 5;
let contador = 1;

let factorial = 1;
let factorialFinal = 1;

while (contador < numero) {
  factorial = factorialFinal * (contador + 1);

  console.log(factorialFinal + "X" + (contador+1) + "=" + factorial)

  contador++;

  factorialFinal = factorial;

}


