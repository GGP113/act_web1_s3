/*
Desarrolla un programa que use un ciclo `for` para contar cuántas vocales (a, e, i, o, u) hay en una frase dada. 
Debe mostrar el conteo de cada vocal por separado.
*/

let texto = "hay en una frase dada";
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

for (let i = 0; i < texto.length; i++) {
  let letra = texto.slice(texto.length - 1 - i, texto.length - i);

  switch (letra) {
    case "a":
    case "A":
      contadorA++;
      break;

    case "e":
    case "E":
      contadorE++;
      break;

    case "i":
    case "I":
      contadorI++;
      break;
    case "o":
    case "O":
      contadorO++;
      break;

    case "u":
    case "U":
      contadorU++;
      break;
  }
}

console.log(`Cantidad de A: ${contadorA}`);
console.log(`Cantidad de E: ${contadorE}`);
console.log(`Cantidad de I: ${contadorI}`);
console.log(`Cantidad de O: ${contadorO}`);
console.log(`Cantidad de U: ${contadorU}`);
