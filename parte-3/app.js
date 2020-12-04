"use strict";
function getNombre() {
    return 'Andres';
}
var nombre = 'juan';
var apellido = 'perez';
var edad = 32;
//let texto = 'hola, ' + nombre +' '+ apellido + "("+edad+")";
var texto = "hola,\n" + nombre + " " + apellido + "\n(" + edad + ")";
console.log(texto);
var texto2 = "" + getNombre();
console.log(texto2);
