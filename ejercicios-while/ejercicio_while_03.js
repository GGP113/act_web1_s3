/*

Implementa un sistema que use un ciclo `while` para solicitar una contraseña al usuario hasta que ingrese "admin123". 
Debe mostrar cuántos intentos fallidos hubo antes del acceso correcto.

*/


let password = ""

let contador = 0

while(password !== "admin123" ){

    password = prompt("Ingresa la contraseña:");

    

    contador ++
    console.log("Contraseña incorrecta")


}

console.log("Acceso existoso")

console.log("Número de intentos " + contador)