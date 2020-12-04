
class Avengers1 {

    nombre:string = 'antman';
    equipo:string = 'undefined';
    nombreReal:string = 'undefined';

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman:Avengers1 = new Avengers1('antman', 'cap', 'scoott');
console.log(antman);