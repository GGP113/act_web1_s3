/*

Implementa un programa que use ciclos `for` anidados para crear el siguiente patrón:
```
*
**
***
****
*****
****
***
**
*
```

*/

for (let i = 0; i < 5; i++) {
  let c = i + 1;

  if (i < 5) {
    let asteriscos = "";

    for (let j = 0; j < c; j++) {
      asteriscos += "*";
    }
    console.log(asteriscos);
  }


}




for (let i = 0; i < 5; i++) {
  let c = i + 1;

  if (i < 5) {
    let asteriscos = "";

    for (let j = 5; j >c; j--) {
      asteriscos += "*";
    }
    console.log(asteriscos);
  }


}
