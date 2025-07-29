/*

Dado un array de nombres, usa un ciclo `while` para buscar un nombre específico. 
El programa debe mostrar en qué posición se encontró el nombre o indicar si no existe.

*/



let numeros = ["maria", "juan", "jose", "luis", "alonso"];
let buscar = "alonso";
let indice = 0;
let encontrado = false;

while (indice < numeros.length && !encontrado) {
    if (numeros[indice] === buscar) {
        encontrado = true;
        console.log(`Nombre ${buscar} encontrado en la posición ${indice}`);
    } 
    indice++;
}

if (!encontrado) {
    console.log(`El nombre ${buscar} no se encontró en el array`);
}








