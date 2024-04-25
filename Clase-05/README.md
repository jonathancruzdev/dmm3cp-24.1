# Condicionales
- Condicionales IF ... Else IF ...
- Condicionales con Operadores lógicos

``` js
    let edad = +prompt('Ingrese la edad');

    if(  edad > 0 && edad < 2) {
        document.write('<div class="alert alert-info"> Sos un Bebé </div>');
    } else if( edad >= 2  &&  edad <= 11){
        document.write('<div class="alert alert-info"> Sos un Niño </div>');
    }  else if( edad >= 12  &&  edad <= 17){
        document.write('<div class="alert alert-info"> Sos un Adolescente </div>');
    }  else if( edad >= 18  &&  edad <= 20){
        document.write('<div class="alert alert-info"> Sos un Joven </div>');
    }  else if( edad >= 21  &&  edad <= 65){
        document.write('<div class="alert alert-info"> Sos un Adulto </div>');
    } else if ( edad > 65 && edad < 99 ) {
        document.write('<div class="alert alert-info"> Sos un Anciano </div>');
    } else {
        document.write('<div class="alert alert-danger"> Edad Invalida </div>');
    }

```
