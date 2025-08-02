/*

Utiliza un ciclo `for` para generar la siguiente secuencia: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. 
Debe mostrar cada término y la suma total de la secuencia.

*/


let potencia=10
let numero =2


let potenciaDos=1
let potenciaTres=1
let suma =0

for(let i =0; i<potencia; i++){


    
     
    potenciaTres =numero*potenciaDos

    console.log(`Termino ${i+1}  =  ${potenciaTres}`)

    potenciaDos=potenciaTres
    suma += potenciaTres





}

console.log(`Suma de terminos  =  ${suma}`)