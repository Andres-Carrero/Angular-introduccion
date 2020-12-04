"use strict";
var avenger = {
    nombre: 'steven',
    clave: 'capitan',
    poder: 'droga'
};
//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder= avenger.poder;
//destructuracion
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
//destructuracion de arreglos = tambien es secuencial
var avengers = ['Thor -', ' Capitan America -', ' Iron Man'];
var thor = avengers[0], capi = avengers[1], iron = avengers[2];
console.log(thor, capi, iron);
//hacer referencia a uno en especifico
var avengers1 = ['Thor', 'Capitan America', 'Iron Man'];
var ironm = avengers1[2];
console.log(ironm);
