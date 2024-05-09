// Versión While
let numero = +prompt('Ingrese un número'); // Variable de Control

while( numero != 0 ) { // Condición de Corte
    document.write('<p>El número es: ' + numero + '</p>');
    numero = +prompt('Ingrese un número'); // Actualizo la Variable de Control
}

// Versión Do While
let numero2;

do {
    document.write('<p>El número es: ' + numero2 + '</p>');
    numero2 = +prompt('Ingrese un número'); // Actualizo la Variable de Control

} while( numero2 != 0)

