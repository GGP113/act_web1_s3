/*

Implementa un programa que use un ciclo `for` para verificar si una palabra o frase es un palíndromo
 (se lee igual de izquierda a derecha que de derecha a izquierda). Ignora espacios y mayúsculas.


*/


let texto = "acaso hubo BHUOos Aca??"
let textoInv = ""

for( let i=0; i<texto.length; i++){

    let letra = texto.slice(texto.length-1-i, texto.length-i)

    if (letra!= " " || letra !="," || letra!="." || letra!=";" || letra !=":" || letra!="?" || letra != "¿"){
        textoInv+= letra
    }
    
}


if(texto.toLocaleLowerCase=== textoInv.toLocaleLowerCase){

    console.log("palíndromo")
}