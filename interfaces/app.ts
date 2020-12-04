//interfaces
interface Xmen{
    nombre:string,
    poder:string
} 

function enviarMision(xmen:Xmen){
    console.log('enviando a: ' + xmen.nombre);
}

function enviarCuartel(xmen:Xmen){
    console.log('enviando a: ' + xmen.nombre);
}
     

let wolverine:Xmen = {
    nombre: 'wolverine',
    poder: 'regeneracion'
};

enviarMision(wolverine)