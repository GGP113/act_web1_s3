/*
Utiliza un ciclo `while` para generar los primeros 15 números de la secuencia de Fibonacci. 
Muestra cada número de la secuencia.
*/


let numero = 15;
let contador = 0;

let f0 = 0;
let f1 = 1;


while (contador < numero) {

    let fn =  f0 +f1;

    console.log(f0 + "+" + f1 + " = " + fn)

    f0 = f1

    contador ++

    f1 = fn

    

    


}
