/*Desarrolla un programa que use un ciclo `while` para procesar calificaciones de estudiantes. 
Debe continuar pidiendo calificaciones hasta que se ingrese -1,
 luego calcular y mostrar el promedio, la calificación más alta y más baja.*/



let suma = 0;
let cantidad = 0;
let calificacion;
let mayor = -Infinity;
let menor = Infinity;

while (true) {
  calificacion = parseFloat(prompt("Ingresa una calificación (o -1 para terminar):"));

  if (calificacion === -1) {
    break;
  }

  if (!isNaN(calificacion)) {
    suma += calificacion;
    cantidad++;

    if (calificacion > mayor) {
      mayor = calificacion;
    }

    if (calificacion < menor) {
      menor = calificacion;
    }
  } 
}

if (cantidad > 0) {
  const promedio = suma / cantidad;
  alert(`Promedio: ${promedio.toFixed(2)}\nMayor calificación: ${mayor}\nMenor calificación: ${menor}`);
} 