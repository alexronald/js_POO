export class Empleado{
    #nombre
    #dni
    #salario
    #clave

    constructor(nombre,dni,salario){
        this.#nombre=nombre;
        this.#dni=dni;
        this.#salario=salario;

    }

    asinarClave(clave){
        this.#clave=clave;
    }

    get clave(){
        return this.#clave;
    }

    autenticable(clave){
        return this.#clave==clave
    }

    verBonificacion(){
        return this.#salario;
    }

    _verBonificacion(bono){
        return this.#salario + this.#salario * bono/100;
    }
}