/*Implementa un programa que use un ciclo `while` para contar cuántos dígitos tiene un número entero positivo. 
Por ejemplo, 12345 tiene 5 dígitos.*/

let entero =12345;

let digito =1

let prueba = entero/(10**digito)

while(prueba > 1){

    digito ++
    prueba = entero/(10**digito)
}

console.log("El número tiene " + digito +" digitos")