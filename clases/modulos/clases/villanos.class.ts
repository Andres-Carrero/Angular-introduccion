export class Villano {
    nombre:string;
    plan:string;

    constructor(nombre:string, plan:string){
        this.nombre = nombre;
        this.plan = plan;
    }
    imprimirPlan(){
        console.log((`el plan es: ${this.plan}`));
    }
} 