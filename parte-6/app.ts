let avenger = {
  nombre: 'steven',
  clave: 'capitan',
  poder: 'droga'
}

//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder= avenger.poder;

//destructuracion
let {nombre, clave, poder} = avenger;
console.log(nombre, clave, poder)


//destructuracion de arreglos = tambien es secuencial
let avengers:string[] = ['Thor -', ' Capitan America -', ' Iron Man'];
let [thor, capi, iron] = avengers
console.log(thor, capi, iron);

//hacer referencia a uno en especifico
let avengers1:string[] = ['Thor', 'Capitan America', 'Iron Man'];
let [, , ironm] = avengers1
console.log(ironm);
