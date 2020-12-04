//funcion normal
/*
let funcion = function (a){
  return a;
}
let funcion1 = function (a:number, b:number){
  return a + b;
}
let funcion2 = function(nombre:string){
  nombre = nombre.toUpperCase();
  return nombre;
}


let nombre = 'pedro'

let hulk= {
  nombre: 'hulk',
  smash(){
    setTimeout(function(){
      console.log(this.nombre + ' smash!!')
    })
  }
}
hulk.smash();
*/


//funcion de flecha
/*
let funcionFlecha = (a) => a;

let funcionFlecha1 = (a:number, b:number) => a+b;

let funcionFlecha2 = nombre:string => {
  nombre = nombre.toUpperCase();
  return nombre;
}
*/

let nombre = 'pedro'

let hulk= {
  nombre: 'hulk',
  smash(){
    setTimeout(() => console.log(this.nombre + ' smash!!'), 1500);
  }
}
hulk.smash();
