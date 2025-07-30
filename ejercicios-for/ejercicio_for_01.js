/*
Usa un ciclo `for` anidado para crear las tablas de multiplicar del 1 al 10. 
Cada tabla debe mostrarse claramente separada y formateada.

*/

for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    console.log(i + " X " + j + " = " + i * j);
  }

  console.log("\n");
}
