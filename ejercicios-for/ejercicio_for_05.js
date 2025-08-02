/*

Crea un programa que use un ciclo `for` para invertir una cadena de texto carácter por carácter. 
Muestra tanto la cadena original como la invertida.


*/

let texto = "Hola"
let textoInv = ""

for( let i=0; i<texto.length; i++){

    let letra = texto.slice(texto.length-1-i, texto.length-i)
    textoInv+= letra
}


console.log( `Texto original: ${texto}`)
console.log( `Texto invertivo: ${textoInv}`)