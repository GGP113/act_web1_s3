/*

Utiliza un ciclo `while` para calcular la suma de todos los números pares entre 1 y 50. 
Muestra el resultado final y cuántos números pares se sumaron.

*/ 


let contador =1;
let contadorAuxiliar =0;
let suma = 0;

while (contador <51){

    let modulo = contador%2

    if(modulo ==0){

        suma = suma+ contador
        contadorAuxiliar++
        

    }

    contador++


}

console.log("resultado final: " + suma)
console.log("numeros sumados: " + contadorAuxiliar)