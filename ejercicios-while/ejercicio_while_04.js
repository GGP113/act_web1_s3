/*
Crea un programa que use un ciclo `while` para generar números aleatorios entre 1 y 100 hasta que salga un número mayor a 95. 
Muestra cada número generado y al final indica cuántos números se generaron.


*/


let randomNumber = Math.floor(Math.random()*100)+1
console.log(randomNumber)

let contador =1

while(!(randomNumber>95)){

    contador++
    randomNumber = Math.floor(Math.random()*100)+1
    console.log(randomNumber)


}

console.log("El total de numeros generados fue: "+ contador)