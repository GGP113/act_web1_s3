/*

Crea un juego que use un ciclo `while` donde el usuario debe adivinar un número entre 1 y 50. 
Proporciona pistas ("muy alto", "muy bajo", "cerca") y limita a 7 intentos máximo.

*/

let randomNumber = Math.floor(Math.random() * 50) + 1;


let contador = 0;
let numeroUsuario = prompt("Ingrese un numero");

let acierto = false;

while (contador < 7 && !acierto) {
  if (numeroUsuario != randomNumber) {
    contador++;

    let diferencia = (randomNumber - numeroUsuario) / randomNumber;

    if (diferencia * 100 > 20) {
      console.log("muy bajo");

      numeroUsuario = prompt("Ingrese un nuevo numero")
    } else if (diferencia * 100 < -20) {
      console.log("muy alto");

      
      numeroUsuario = prompt("Ingrese un nuevo numero")
    } else {
      console.log("cerca");
      numeroUsuario = prompt("Ingrese un nuevo numero")
    }

    console.log("numero de intentos: "+ (7-contador))
  } 
  
  else {
    acierto = true;

    console.log("numero correcto");
    console.log(randomNumber);
  }
}

if(!acierto){

    console.log("juego terminado, no tiene mas intentos")
  console.log(randomNumber);
}
