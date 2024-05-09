# Bucles Cerrados
📌 Yo se de ante mano cuantas veces se va a realizar repetición

``` js
    for(let i=1; i<=5; i++){
        let nombre = prompt('Ingrese el nombre');
        document.write('<p> Hola ' + nombre +' </p>');
    }
```

# Bucles Abiertos
## While
``` js
    let i = 1; // Variable de control
    while( i<=5 ){ // Condición de corte
        document.write('<p>Repetición</p>');
                
        i++; // Actualizo la variable de control
    }

    document.write('<p>Fin del Bucle</p>');
```

``` js
    // Realizar un programa que solicite al usuario productos hasta que le usuario escriba como nombre "Salir"
    // 📌 Variable de Control
    let nombre = prompt('Ingresa el Producto');
    // 💡 Con variable.toLowerCase() convierto todo el String a minúscula 
    document.write('<ul>');
    while( nombre.toLowerCase() != 'salir') {  // 📌 Condición de Corte
        document.write('<li>' + nombre + '</li>');
        // 📌 Actualizo la variable de Control
        nombre = prompt('Ingresa el Producto');
    }
    document.write('</ul>');
```
---

## Do While

``` js
    let nombre; // 📌 Variable de Control
    document.write('<ul>');
    do {
        // 📌 Actualizo la variable de Control
        nombre = prompt('Ingresa el Producto');
        if( nombre != 'salir'){
            document.write('<li>' + nombre + '</li>');
        }
                
    } while( nombre.toLowerCase() != 'salir') // 📌 Condición de Corte
    document.write('</ul>');
```
