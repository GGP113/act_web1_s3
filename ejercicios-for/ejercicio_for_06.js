/*
Implementa una función que use un ciclo `for` para calcular la potencia de un número sin usar Math.pow(). 
Debe mostrar el proceso paso a paso.


*/

let potencia=5
let numero =8


let potenciaDos=1
let potenciaTres=1

for(let i =0; i<potencia; i++){


    
     
    potenciaTres =numero*potenciaDos

    console.log(`${numero} ** ${i+1} = ${numero} X ${potenciaDos} = ${potenciaTres}`)

    potenciaDos=potenciaTres





}

console.log(`\nEl resultado final es: ${potenciaTres}`)