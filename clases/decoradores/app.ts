function Consola (constructor:Function){
    console.log(constructor);
}

@Consola
class Villano{
    constructor(public nombre:string){

    }
}