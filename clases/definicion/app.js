"use strict";
var Avengers1 = /** @class */ (function () {
    function Avengers1(nombre, equipo, nombreReal) {
        this.nombre = 'antman';
        this.equipo = 'undefined';
        this.nombreReal = 'undefined';
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avengers1;
}());
var antman = new Avengers1('antman', 'cap', 'scoott');
console.log(antman);
