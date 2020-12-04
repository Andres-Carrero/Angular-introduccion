function getNombre (){
  return 'Andres';
}

let nombre:string = 'juan';
let apellido:string = 'perez';
let edad:number = 32;

//let texto = 'hola, ' + nombre +' '+ apellido + "("+edad+")";
let texto = `hola,
${nombre} ${apellido}
(${edad})`

console.log(texto);


let texto2:string = `${getNombre()}`;

console.log(texto2)
