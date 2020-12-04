"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xmen = void 0;
var Xmen = /** @class */ (function () {
    function Xmen(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    Xmen.prototype.imprimir = function () {
        console.log((this.nombre + " - " + this.clave));
    };
    return Xmen;
}());
exports.Xmen = Xmen;
