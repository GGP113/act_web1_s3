/*Usa ciclos `for` anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). 
Muestra la matriz formateada.
*/

let texto = ""
for(let i=1; i<=5; i++){

    for(let j=1; j<=5; j++){

        let suma =i+j
        texto += suma
        texto += " "
    }
    

    console.log(texto)
    texto = ""
}
