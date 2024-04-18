# Condicionales
- Condicionales IF ... Else IF ...
- Condicionales con Operadores lógicos

``` js
    let usuario =  prompt('Ingrese el usuario');
    let password = prompt('Ingrese la Contraseña');
    // Si usuario == 'admin' y password == '1234'
    if( usuario.toLowerCase() == 'admin' && password == 1234 ){
      document.write('<h2 class="text-succes">Bienvenido</h2>');
    } else {
      document.write('<h2 class="text-danger">Usuario o Contraseña Invalidos</h2>')
    }

```
