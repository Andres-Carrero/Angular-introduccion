"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Villano = void 0;
var Villano = /** @class */ (function () {
    function Villano(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    Villano.prototype.imprimirPlan = function () {
        console.log(("el plan es: " + this.plan));
    };
    return Villano;
}());
exports.Villano = Villano;
